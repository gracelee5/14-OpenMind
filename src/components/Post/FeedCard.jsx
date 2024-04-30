import React from 'react';
import styled from 'styled-components';
import profile from '../../images/profile-img.svg';
import thumbsUp from '../../images/icons/thumbs-up.svg';
import thumbsDown from '../../images/icons/thumbs-down.svg';
import message from '../../images/Messages.svg';
import more from '../../images/icons/More.svg';

function FeedCard() {
  return (
    <>
      <PostContainer>
        <QuestionStatus>
          <img src={message} alt='message img' />
          n개의 질문이 있습니다.
        </QuestionStatus>
        <CardItem>
          <CardTop>
            <Badge>답변 완료</Badge>
            <ButtonModify></ButtonModify>
          </CardTop>
          <QuestionSection>
            <SubTitle>질문 · 2주전</SubTitle>
            <Title>
              좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?
            </Title>
          </QuestionSection>
          <AnswerSection>
            <ProfileImg></ProfileImg>
            <UserInfo>
              <UserName>아초는고양이</UserName>
              <AnswerDate>2주전</AnswerDate>
            </UserInfo>
            <Answer>
              그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
              찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
              청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
              피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
              방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
              말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
              있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의 것은
              피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지
              것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한 영원히
              듣기만 운다.
            </Answer>
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
      </PostContainer>
    </>
  );
}
export default FeedCard;

const PostContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 716px;
  min-height: 330px;
  background: #f5f1ee;
  border: 1px solid #c7bbb5;
  border-radius: 16px;
  margin-top: 50px;
  background-repeat: no-repeat;
  background-position: center;
  // 겹치는 부분으로 추후에 수정 예정
`;

const QuestionStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  height: 25px;
  color: #542f1a;
  // 겹치는 부분으로 추후에 수정 예정
`;

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

const SubTitle = styled.div`
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

const AnswerDate = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #818181;
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
