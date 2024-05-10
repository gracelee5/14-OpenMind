import React from 'react';
import Styled from 'styled-components';
import CreateFeed from './CreateFeed';
import { Link } from 'react-router-dom';
import arrowRight from '../../images/icons/arrow-right.svg';

function MainPage() {
  return (
    <>
      <Link to='/list'>
        <AskButton>
          {}
          질문하러 가기
          <img src={arrowRight} alt='' />
        </AskButton>
      </Link>
      <MainBody>
        <AskButtonBar />
        <CreateFeed />
      </MainBody>
      {}
    </>
  );
}
export default MainPage;

const MainBody = Styled.div`
  display: flex;
  flex-direction: column;
  




`;
const AskButton = Styled.div`
  background-color: rgba(245, 241, 238, 1);
  color: rgba(84, 47, 26, 1);
  border-radius: 8px;
  border: 1px solid rgba(84, 47, 26, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  float: right;
  margin-right: 130px;
  padding: 12px 24px 12px 24px;
  font-family: "Pretendard";
  font-weight: 400;
  // position: absolute;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    top: 44px;
    left: 557px;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

`;

const AskButtonBar = Styled.div`
  width: 100vh;
  height: 100vh;
  background-color: rgba(249, 249, 249, 1); 

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

`;
