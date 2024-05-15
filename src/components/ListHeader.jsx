import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import OpenmindLogo from '../images/logo.svg';
import AnswerButton from './AnswerButton';
import arrowRight from '../images/icons/arrow-right.svg';

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;

  width: 100%;


  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    padding-right: 50px;
    padding-left: 50px;
  }

  z-index: 1;

`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  padding: 10px;
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

// 로고
const Logo = styled.div`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
  height: 3px;
`;

function ListHeader() {
  const localId = localStorage.getItem('id');
  const linkTo = localId ? `/post/${localId}/answer` : '/';

  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo>
            <div>
              <Link to='/' ria-label='홈으로 이동'>
                <img src={OpenmindLogo} alt='오픈마인드 로고' />
              </Link>
            </div>
          </Logo>
          <Spacer />
          <div>
            <Link to={linkTo}>
              <AnswerButton>
                {' '}
                답변하러가기 <img src={arrowRight} alt='' />
              </AnswerButton>
            </Link>
          </div>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
}

export default ListHeader;
