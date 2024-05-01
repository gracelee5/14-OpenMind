import React from 'react';
import OpenmindLogo from '../images/OpenmindLogo.png';
import { Link } from 'react-router-dom';
import AnswerButton from './AnswerButton';

function ListHeader() {
  return (
    <header>
      <div>
        {' '}
        <Link to='/' ria-label='홈으로 이동'>
          <img src={OpenmindLogo} alt='오픈마인드 로고' />
        </Link>
        <AnswerButton>답변하러 가기 ➝</AnswerButton>
      </div>
    </header>
  );
}

export default ListHeader;
