import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile-img.svg';
import more from '../../images/icons/More.svg';
import { ReactComponent as edit } from '../../images/icons/Edit.svg';
import { ReactComponent as x } from '../../images/x.svg';
import ButtonThumbs from './ButtonThumbs';
import AnswerEdit from './AnswerEdit';
import AnswerInput from './AnswerInput';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

async function getSubject(id) {
  const response = await fetch(`${BASE_URL}subjects/${id}/`);
  const body = await response.json();
  return body;
}

async function getAnswer(id) {
  const response = await fetch(`${BASE_URL}answers/${id}/`);
  const body = await response.json();
  //console.log('subject', body);
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

function FeedCard({
  item: question,
  post,
  onSelect,
  isSelected,
  questionAnswerId,
}) {
  const [idCheck, setIdCheck] = useState(false);
  const [answer, setAnswer] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const localId = localStorage.getItem('id');
    if (localId === id) {
      setIdCheck(true);
    }
  }, [id]);

  const [showMenu, setShowMenu] = useState(false);
  const [editButtonClick, setEditButtonClick] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  useEffect(() => {
    // 수정된 부분
    if (questionAnswerId) {
      // questionAnswerId가 존재할 때에만 getAnswer 호출
      getAnswer(questionAnswerId).then((answer) => {
        setAnswer(answer);
        setIsRejected(answer.isRejected);
      });
    }
  }, [questionAnswerId]); // 수정된 부분

  const handleConfirmClick = () => {
    console.log('클릭');
    setEditButtonClick(true);
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
                      if (!isRejected && answer !== null) {
                        handleConfirmClick();
                      }
                    }}
                  >
                    <Stylededit src={edit} alt='edit' />
                    수정하기
                  </MenuItem>
                  <MenuItem
                    onClick={async () => {
                      await fetch(
                        `https://openmind-api.vercel.app/6-14/questions/${question.id}/`,
                        {
                          method: 'DELETE',
                        }
                      );
                      location.reload();
                    }}
                  >
                    <Styledx src={x} alt='x' />
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
        {idCheck === true && editButtonClick ? (
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
                setEditButtonClick(false);
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
              questionId={question.id}
              onInputSuccess={() => {
                //getAnswer(answer.id).then((answer) => setAnswer(answer));
                location.reload();
              }}
            />
          </UserInfoWrap>
        ) : (
          <>
            {!idCheck || answer ? (
              <UserInfoWrap>
                <ProfileImg>
                  <img src={post.imageSource} alt={post.imageSource} />
                </ProfileImg>
                <UserInfo>
                  <UserName>{post.name}</UserName>
                  {answer !== null && (
                    <DateText>{formatData(answer.createdAt)}</DateText>
                  )}
                </UserInfo>
                <AnswerView isRejected={isRejected}>
                  {answer?.content}
                </AnswerView>
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

function FeedCardList({ items, id }) {
  const [post, setPost] = useState([]);
  const [answer, setAnswer] = useState([]);

  //삭제하기용 선택한 아이템
  const [selectedCardId, setSelectedCardId] = useState(null);
  // const { id } = useParams;
  useEffect(() => {
    getSubject(id).then((post) => setPost(post));
    console.log('getsubject:', getSubject(id));
  }, [id]);

  useEffect(() => {
    getAnswer().then((answer) => setAnswer(answer));
  }, []);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FeedCard
              item={item} //question c
              post={post} //question c
              answer={answer}
              onSelect={setSelectedCardId} //question c
              isSelected={item.id === selectedCardId} //question c
              // questionId={item.id}
              questionAnswerId={item.answer ? item.answer.id : null}
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
  width: 100%;
  border: 2px solid transparent;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 375px) {
    padding: 24px;
    gap: 24px;
  }
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
  gap: 4px;
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
  @media (max-width: 375px) {
    font-size: 16px;
  }
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
  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
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
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const AnswerView = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${(props) => (props.isRejected ? '#b93333' : 'black')};
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

const MenuItem = styled.button`
  display: flex;
  justify-content: center;
  width: 103px;
  height: 30px;
  padding: 6px 0;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #515151;
  &:hover {
    color: #1877f2;
    stroke: #1877f2;
    stroke-width: 0.5;
  }
`;
const Stylededit = styled(edit)`
  width: 14px;
  height: 14px;
  margin: 0 6px 0 0;
`;
const Styledx = styled(x)`
  width: 14px;
  height: 14px;
  margin: 0 6px 0 0;
`;
