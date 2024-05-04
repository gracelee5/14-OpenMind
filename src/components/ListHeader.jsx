import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import OpenmindLogo from '../images/logo.svg';
import AnswerButton from './AnswerButton';

// 상단 고정, 그림자
const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10px;
  width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
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
            <AnswerButton> 답변하러 가기 ➝ </AnswerButton>
          </div>
        </HeaderContents>
      </WhiteBackground>
      <GradientBorder />
    </Positioner>
  );
}

export default ListHeader;
