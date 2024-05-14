import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile-img.svg';
import more from '../../images/icons/More.svg';
import edit from '../../images/icons/Edit.svg';
import x from '../../images/x.svg';
import ButtonThumbs from './ButtonThumbs';
import AnswerEdit from './AnswerEdit';
import AnswerInput from './AnswerInput';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

async function getSubject(subjectId) {
  const response = await fetch(`${BASE_URL}subjects/${subjectId}/`);
  const body = await response.json();
  return body;
}

async function getAnswer(id) {
  const response = await fetch(`${BASE_URL}answers/${id}/`);
  const body = await response.json();
  console.log('subject', body);
  return body;
}

function formatData(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return '방금전';
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
}

function Badge({ item }) {
  if (item === null || item === undefined) {
    return <div className='badge yet'>미답변</div>;
  } else {
    return <div className='badge done'>답변 완료</div>;
  }
}

function FeedCard({ item: question, post, onSelect, isSelected, questionId }) {
  const [idCheck, setIdCheck] = useState(false);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    const localId = localStorage.getItem('id');
    if (localId === post.id) {
      setIdCheck(true);
    }
    //console.log('로컬 아이디', localId);
    console.log('post 아이디', post.id);
  }, [post.id]);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (question.answer?.id) {
      getAnswer(question.answer.id).then((answer) => setAnswer(answer));
    }
  }, [question.answer?.id]);

  const handleConfirmClick = () => {
    setShowMenu(false);
    setIdCheck(!idCheck);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <CardItem
        onClick={() => onSelect(question.id)}
        style={
          isSelected
            ? {
                border: '2px solid',
                borderImage:
                  'linear-gradient(to right, transparent, brown, transparent) 1',
              }
            : {}
        }
      >
        <CardTop>
          <BadgeStyle>
            <Badge item={question.answer} />
          </BadgeStyle>

          {idCheck ? (
            <ButtonModify onClick={toggleMenu}>
              <img src={more} alt='more' />
              {showMenu && (
                <ModifyMenu>
                  <MenuItem
                    onClick={() => {
                      setIdCheck(!idCheck);
                      handleConfirmClick;
                    }}
                  >
                    <StyledEditX src={edit} alt='edit' />
                    수정하기
                  </MenuItem>
                  <MenuItem>
                    <StyledEditX src={x} alt='x' />
                    삭제하기
                  </MenuItem>
                </ModifyMenu>
              )}
            </ButtonModify>
          ) : null}
          {/* <ButtonModify></ButtonModify> */}
        </CardTop>
        <QuestionSection>
          <DateText>
            질문 · <span>{formatData(question.createdAt)}</span>
          </DateText>
          <Title>{question.content}</Title>
        </QuestionSection>
        {idCheck === true && answer ? (
          <UserInfoWrap>
            <ProfileImg>
              <img src={post.imageSource} alt={post.imageSource} />
            </ProfileImg>
            <UserInfo>
              <UserName>{post.name}</UserName>
              {answer && <DateText>{formatData(answer.createdAt)}</DateText>}
            </UserInfo>
            <AnswerEdit
              initialContent={answer?.content}
              answerId={answer.id}
              onEditSuccess={() => {
                getAnswer(answer.id).then((answer) => setAnswer(answer));
                setIdCheck(false);
              }}
            />
          </UserInfoWrap>
        ) : idCheck === true && !answer ? (
          <UserInfoWrap>
            <ProfileImg>
              <img src={post.imageSource} alt={post.imageSource} />
            </ProfileImg>
            <UserInfo>
              <UserName>{post.name}</UserName>
              {answer && <DateText>{formatData(answer.createdAt)}</DateText>}
            </UserInfo>
            <AnswerInput
              questionId={questionId}
              onInputSuccess={() => {
                getAnswer(answer.id).then((answer) => setAnswer(answer));
              }}
            />
          </UserInfoWrap>
        ) : (
          <>
            {answer?.content ? (
              <UserInfoWrap>
                <ProfileImg>
                  <img src={post.imageSource} alt={post.imageSource} />
                </ProfileImg>
                <UserInfo>
                  <UserName>{post.name}</UserName>
                  {answer && (
                    <DateText>{formatData(answer.createdAt)}</DateText>
                  )}
                </UserInfo>
                <AnswerView>{answer?.content}</AnswerView>
              </UserInfoWrap>
            ) : null}
          </>
        )}
        <ButtonWrap>
          <ButtonThumbs
            questionId={question.id}
            like={question.like}
            dislike={question.dislike}
          />
        </ButtonWrap>
      </CardItem>
    </>
  );
}

function FeedCardList({ items, questionId }) {
  const [post, setPost] = useState([]);
  const [answer, setAnswer] = useState([]);

  //삭제하기용 선택한 아이템
  const [selectedCardId, setSelectedCardId] = useState(null);
  const { id: subjectId } = useParams;
  useEffect(() => {
    getSubject(subjectId).then((post) => setPost(post));
    console.log('getsubject:', getSubject(subjectId));
  }, [subjectId]);

  useEffect(() => {
    getAnswer().then((answer) => setAnswer(answer));
  }, []);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FeedCard
              item={item}
              post={post}
              answer={answer}
              onSelect={setSelectedCardId}
              isSelected={item.id === selectedCardId}
              questionId={questionId}
            ></FeedCard>{' '}
          </li>
        );
      })}
    </ul>
  );
}

FeedCardList.propTypes = {
  items: PropTypes.any.isRequired,
};
FeedCard.propTypes = {
  item: PropTypes.any.isRequired,
};

export default FeedCardList;

const CardItem = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0px 4px 4px 0px #8c8c8c40;
  border-radius: 16px;
  gap: 32px;
  padding: 32px;
  flex-direction: column;
  margin: 16px 0;
  width: 684px;
  border: 2px solid transparent;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BadgeStyle = styled.div`
  & .yet {
    width: 100%;
    height: 100%;
    color: #818181;
    border: 1px solid currentColor;
    padding: 4px 12px;
    display: flex;
    border-radius: 8px;
  }
  & .done {
    width: 100%;
    height: 100%;
    color: #542f1a;
    border: 1px solid currentColor;
    padding: 4px 12px;
    display: flex;
    border-radius: 8px;
  }
  gap: 10px;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;

const ButtonModify = styled.button`
  background-image: url(${more});
  width: 26px;
  height: 26px;
  background-repeat: no-repeat;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: var(--Grayscale-40, #818181);
`;

const Title = styled.div`
  font-family: Actor;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const UserInfoWrap = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
`;

const ProfileImg = styled.div`
  grid-row: 1 / span 3;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  // background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const UserName = styled.p`
  font-family: Actor;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

const AnswerView = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
`;

const ButtonWrap = styled.div`
  display: flex;
  border-top: 1px solid #cfcfcf;
  padding-top: 24px;
  gap: 32px;
`;

const ModifyMenu = styled.div`
  box-sizing: border-box;
  width: 103px;
  height: 68px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 4px 0;
  white-space: nowrap;
`;

const MenuItem = styled.div`
  width: 103px;
  height: 30px;
  padding: 6px 0;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #515151;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #f0f0f0, transparent);
  }
`;
const StyledEditX = styled.img`
  width: 14px;
  height: 14px;
  margin: 0 6px 0 0;
`;
