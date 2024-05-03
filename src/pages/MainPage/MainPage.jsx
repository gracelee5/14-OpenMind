import React from 'react';
import Styled from 'styled-components';
import logo from '../../images/logo.svg';
import UserIdInputBox from './UserIdInputBox';
// import GetQuestions  from './GetQuestions';
import backgroundImg from '../../images/background-img.svg';

function MainPage() {
  const handleClick = () => {
    history.push('/list');
  };

  return (
    <>
      <AskButton onClick={handleClick}>
        {}
        질문하러 가기
      </AskButton>
      <Header>
        <img alt='' src={logo} />
      </Header>
      <UserIdInputBox /> {/* UserIdInputBox 컴포넌트를 추가. */}
      <Section>
        <img alt='backgroundImg' src={backgroundImg} />
      </Section>
    </>
  );
}
export default MainPage;

const Header = Styled.header`
  display: flex; 
  margin: auto;
  height: 234px;

  `;

const Section = Styled.section`
  display: flex;
  height: 627px;
  width: 100%;
  
  `;

const AskButton = Styled.div`
  background-color: rgba(245, 241, 238, 1);
  color: rgba(84, 47, 26, 1);
  padding: 10px 20px;
  border-radius: 1px;
  cursor: pointer;
  width: 161px;
  height: 46px;
`;
