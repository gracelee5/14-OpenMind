import React, { useState } from 'react';
import styled from 'styled-components';
import BgImg from '../../../images/background-img.svg';
import logo from '../../../images/logo.svg';
import link from '../../../images/link-img.svg';
import kakao from '../../../images/kakao-img.svg';
import facebook from '../../../images/facebook-img.svg';
import profile from '../../../images/profile-img.svg';
import empty from '../../../images/empty.svg';
import message from '../../../images/Messages.svg';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

function FeedBackground() {
  const [openModal, setOpenModal] = useState(false);

  const handleQuestionFormButtonClick = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Header>
        <Link to='/'>
          <Logo src={logo} />
        </Link>
      </Header>
      <BodyContainer>
        <Section>
          <ProfileImg src={profile} />
          <UserName>아초는고양이</UserName>
          <LinkSection>
            <ShareButton src={link} />
            <ShareButton src={kakao} />
            <ShareButton src={facebook} />
          </LinkSection>
        </Section>
        <PostContainer>
          <QuestionStatus>
            <img src={message} alt='message img' />
            아직 질문이 없습니다.
          </QuestionStatus>
        </PostContainer>
        <QuestionFormButton onClick={handleQuestionFormButtonClick}>
          질문 작성하기
        </QuestionFormButton>
      </BodyContainer>
      {openModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}
export default FeedBackground;

const Header = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 234px;
`;
const BodyContainer = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  position: absolute;
  width: 170px;
  height: 67px;
  left: calc(50% - 170px / 2);
  top: 50px;
`;
const ProfileImg = styled.img`
  width: 136px;
  height: 136px;
  margin-top: -100px;
  z-index: 1;
`;
const UserName = styled.p`
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #000000;
  height: 40px;
  margin-top: 20px;
`;
const LinkSection = styled.div`
  display: flex;
  gap: 8px;
`;
const ShareButton = styled.img`
  width: 40px;
  height: 40px;
`;
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
  background-image: url(${empty});
  background-repeat: no-repeat;
  background-position: center;
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
`;
const QuestionFormButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 70px 24px 24px auto;
  background: #542f1a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 200px;
  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  height: 54px;
  width: 208px;
`;
