import React from 'react';
import Styled from 'styled-components';
import logo from '../../images/logo.svg';
import backgroundImg from '../../images/background-img.svg';

function MainPage() {
  return (
    <>
      <Header>
        <img alt='' src={logo} />
      </Header>
      <Section>
        <img alt='backgroundImg' src={backgroundImg} />
      </Section>
    </>
  );
}
export default MainPage;

const Header = Styled.header`
  width: 100%;
  display: flex; 
  margin: 0 auto;
  height: 234px;

  `;

const Section = Styled.section`
  width: 100%;
  display: flex;
  height: 627px;
  margin-bottom: 0px;
  `;
