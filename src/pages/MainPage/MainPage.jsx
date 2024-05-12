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
      <CreateFeed />
      {}
    </>
  );
}
export default MainPage;

//질문하러가기 버튼
const AskButton = Styled.div`
  display: flex;
  background-color: rgba(245, 241, 238, 1);
  color: rgba(84, 47, 26, 1);
  border-radius: 8px;
  border: 1px solid rgba(84, 47, 26, 1);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  margin-left: auto;
  margin-right: 130px;
  width: 161px;
  height: 46px;
  margin-bottom: 80px;
  padding: 12px 19px 12px 19px;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
  

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    top: 44px;
    left: 557px;
  }

  @media only screen and (max-width: 767px) {
    height: 34px;
    font-size: 13px;
    display: flex;
    margin-top: 270px;
    margin-right: auto;
    margin-left: auto;
    width: 143px;
  }

`;
