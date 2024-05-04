import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile-img.svg';
import thumbsUp from '../../images/icons/thumbs-up.svg';
import thumbsDown from '../../images/icons/thumbs-down.svg';
import more from '../../images/icons/More.svg';
import PropTypes from 'prop-types';

function FeedCard({ item }) {
  return (
    <>
      <CardItem>
        <CardTop>
          <Badge>답변 완료</Badge>
          <ButtonModify></ButtonModify>
        </CardTop>
        <QuestionSection>
          <Date>질문 · 2주전 {item.createdAt}</Date>
          <Title>{item.content}</Title>
        </QuestionSection>
        <AnswerSection>
          <ProfileImg></ProfileImg>
          <UserInfo>
            <UserName>{item.id}</UserName>
            <Date>2주전</Date>
          </UserInfo>
          <Answer>{item.answer}</Answer>
        </AnswerSection>
        <ButtonWrap>
          <ButtonThumbs>
            <img src={thumbsUp} alt='message img' />
            좋아요
          </ButtonThumbs>
          <ButtonThumbs>
            <img src={thumbsDown} alt='message img' />
            싫어요
          </ButtonThumbs>
        </ButtonWrap>
      </CardItem>
    </>
  );
}

function FeedCardList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FeedCard item={item}></FeedCard>
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
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Badge = styled.div`
  width: Hug (76px) px;
  height: Hug (26px) px;
  padding: 4px 12px 4px 12px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #542f1a;
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

const Date = styled.div`
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

const AnswerSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
`;

const ProfileImg = styled.div`
  grid-row: 1 / span 3;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: cover;
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

const Answer = styled.div`
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

const ButtonThumbs = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #818181;
`;
