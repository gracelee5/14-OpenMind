import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile-img.svg';
import more from '../../images/icons/More.svg';
import ButtonInput from './ButtonInput';
import AnswerEdit from './AnswerEdit';

const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

async function getSubject(SubjectId = 5718) {
  const response = await fetch(`${BASE_URL}subjects/${SubjectId}/`);
  const body = await response.json();
  return body;
}

async function getAnswer(questionId = 4393) {
  const response = await fetch(`${BASE_URL}answers/${questionId}/`);
  const body = await response.json();
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

function Badge(item) {
  if (item.answer === null || item.answer === 'undefined') {
    return <div className='badge yet'>미작성</div>;
  } else {
    return <div className='badge done'>답변 완료</div>;
  }
}

function FeedCard({ item, post, answer }) {
  const [idCheck, setIdCheck] = useState(false);

  return (
    <>
      <CardItem>
        <CardTop>
          <BadgeStyle>
            <Badge item={item} />
          </BadgeStyle>
          {post.id === 5718 ? (
            <ButtonModify
              onClick={() => {
                setIdCheck(!idCheck);
              }}
            ></ButtonModify>
          ) : null}
          {/* <ButtonModify></ButtonModify> */}
        </CardTop>
        <QuestionSection>
          <DateText>
            질문 · <span>{formatData(item.createdAt)}</span>
          </DateText>
          <Title>{item.content}</Title>
        </QuestionSection>
        <UserInfoWrap>
          <ProfileImg>
            <img src={post.imageSource} alt={post.imageSource} />
          </ProfileImg>
          <UserInfo>
            <UserName>{post.name}</UserName>
            <DateText>{formatData(answer.createdAt)}</DateText>
          </UserInfo>
          {idCheck === true ? (
            <AnswerEdit />
          ) : (
            <AnswerView>{item.answer?.content}</AnswerView>
          )}
        </UserInfoWrap>

        <ButtonWrap>
          <ButtonInput item={item.like} />
        </ButtonWrap>
      </CardItem>
    </>
  );
}

function FeedCardList({ items }) {
  const [post, setPost] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    getSubject().then((post) => setPost(post));
  }, []);

  useEffect(() => {
    getAnswer().then((answer) => setAnswer(answer));
  }, []);

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FeedCard item={item} post={post} answer={answer}></FeedCard>
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
  max-width: 684px;
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
