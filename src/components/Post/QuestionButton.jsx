import React from 'react';
import AddQuestionModal from './Modal/AddQuestionModal';
import styled from 'styled-components';

export default function QuestionButton() {
  return (
    <AddQuestionModal
      trigger={
        <Container>
          <Section>
            <QuestionFormButton></QuestionFormButton>
          </Section>
        </Container>
      }
    />
  );
}
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 767px) {
    justify-content: center;
    top: -20px;
  }
`;
const Section = styled.div`
  position: absolute;
  width: 230px;
  @media only screen and (max-width: 767px) {
    width: 327px;
  }
`;
const QuestionFormButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  bottom: 24px;
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
  transition: all 0.05s ease-in-out;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
  &:before {
    content: '질문 작성하기';
  }
  @media only screen and (max-width: 767px) {
    width: 123px;
    height: 54px;
    left: 200px;
    bottom: 24px;
    &:before {
      content: '질문 작성';
    }
  }
`;
