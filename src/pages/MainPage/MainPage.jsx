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
  padding: 10px 20px;
  border-radius: 1px;
  cursor: pointer;
  width: 161px;
  height: 46px;
`;
