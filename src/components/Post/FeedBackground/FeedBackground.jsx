import React from 'react';
import styled from 'styled-components';
import BgImg from '../../../images/background-img.svg';
import logo from '../../../images/logo.svg';
import link from '../../../images/link-img.svg';
import kakao from '../../../images/kakao-img.svg';
import facebook from '../../../images/facebook-img.svg';
import profile from '../../../images/profile-img.svg';

function FeedBackground() {
  return (
    <>
      <Header>
        <BackgroundImg src={BgImg} />
        <Logo src={logo} />
      </Header>
      <Section>
        <ProfileImg src={profile} />
        <UserName>아초는고양이</UserName>
        <LinkSection>
          <ShareButton src={link} />
          <ShareButton src={kakao} />
          <ShareButton src={facebook} />
        </LinkSection>
      </Section>
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
`;
const BackgroundImg = styled.img`
  position: relative;
  width: 1200px;
  height: 234px;
  margin: 0 auto;
  opacity: 0;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
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
`;
const UserName = styled.p`
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  color: #000000;
`;
const LinkSection = styled.div`
  display: flex;
  gap: 8px;
`;
const ShareButton = styled.img`
  width: 40px;
  height: 40px;
`;
