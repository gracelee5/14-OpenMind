import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BgImg from '../../../images/background-img.svg';
import logo from '../../../images/logo.svg';
import link from '../../../images/link-img.svg';
import kakao from '../../../images/kakao-img.svg';
import facebook from '../../../images/facebook-img.svg';
import profile from '../../../images/profile-img.svg';
import empty from '../../../images/empty.svg';
import message from '../../../images/Messages.svg';
import { Link } from 'react-router-dom';
import Toast from './Toast';
import axios from 'axios';

function FeedBackground() {
  const [toast, setToast] = useState(false);
  const [subject, setSubject] = useState(null);

  let id = 5713;
  const getSubjectsById = async (id) => {
    try {
      const response = await axios.get(
        `https://openmind-api.vercel.app/6-14/subjects/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data = await getSubjectsById(id);
        console.log('Subject data:', data);
        setSubject(data);
      } catch (error) {
        console.error('피드 정보를 불러오는 데 실패했습니다:', error);
      }
    };
    fetchQuestion();
  }, [id]);

  //Url 복사
  const currentUrl = window.location.href;
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setToast(true);
    });
  };

  //페이스북 공유
  const url = window.location.href;
  const shareFacebook = () => {
    const sharedLink = encodeURIComponent(url);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
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
            <ShareButton src={link} onClick={handleCopyUrl} />
            <ShareButton src={kakao} />
            <ShareButton src={facebook} onClick={shareFacebook} />
          </LinkSection>
        </Section>
        <PostContainer>
          {subject && subject.questionCount !== undefined ? (
            parseInt(subject.questionCount) === 0 ? (
              <>
                <QuestionStatus>
                  <img src={message} alt='message img' />
                  <p>아직 질문이 없습니다.</p>
                </QuestionStatus>
                <Empty src={empty} alt='No question' />
              </>
            ) : (
              <>
                <QuestionStatus>
                  <img src={message} alt='message img' />
                  <p>${parseInt(subject.questionCount)}개의 질문이 있습니다.</p>
                </QuestionStatus>
              </>
            )
          ) : (
            <>
              <QuestionStatus>
                <img src={message} alt='message img' />
                <p>질문 정보를 불러오는 중입니다.</p>
              </QuestionStatus>
              <Empty src={empty} alt='No question' />
            </>
          )}
        </PostContainer>

        {toast && <Toast setToast={setToast} text='URL이 복사되었습니다.' />}
      </BodyContainer>
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
  padding-bottom: 150px;
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
`;
const Empty = styled.img`
  width: 150px;
  height: 154px;
  margin-top: 40px;
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
