import React from 'react';
import Styled from 'styled-components';
import CreateFeed from './CreateFeed';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <>
      <Link to='/list'>
        <AskButton>
          {}
          질문하러 가기
        </AskButton>
      </Link>
      <CreateFeed />
      {}
    </>
  );
}
export default MainPage;

const AskButton = Styled.div`
  background-color: rgba(245, 241, 238, 1);
  color: rgba(84, 47, 26, 1);
  border-radius: 8px;
  border: 1px solid rgba(84, 47, 26, 1);
  cursor: pointer;
  width: 161px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  float: right;
  margin-right: 130px;
  padding: 12px 24px 12px 24px;
  font-family: "Pretendard";
  font-weight: 400;


`;
