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

//원래는 FeedBackground({id})라고 작성해야 하는데 아직 list 페이지가 안 만들어졌으므로 에러 안 나게하려고
function FeedBackground() {
  const [toast, setToast] = useState(false);
  const [questionCount, setQuestionCount] = useState(null);
  let id = 5718;
  useEffect(() => {
    const fetchProfileFeed = async () => {
      try {
        const response = await fetch(
          `https://openmind-api.vercel.app/6-14/subjects/${id}/?limit=10`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch profile feed');
        }
        const data = await response.json();
        setQuestionCount(data.questionCount);
      } catch (error) {
        console.error('Error fetching profile feed:', error);
      }
    };

    fetchProfileFeed();
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
          {questionCount == null ? (
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
                <p>{questionCount}개의 질문이 있습니다.</p>
              </QuestionStatus>
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
