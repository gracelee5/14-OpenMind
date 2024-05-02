import React from 'react';
import Modal from './Modal/Modal';
import styled from 'styled-components';

export default function QuestionButton() {
  return (
    <Modal trigger={<QuestionFormButton>질문 작성하기</QuestionFormButton>} />
  );
}
const QuestionFormButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  bottom: 24px;
  right: 24px;
  background: #542f1a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 200px;
  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  height: 54px;
  width: 208px;
`;
