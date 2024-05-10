import React from 'react';
import DeleteUserModal from './Modal/DeleteUserModal';
import styled from 'styled-components';

export default function DeleteButton() {
  return (
    <DeleteUserModal
      trigger={
        <Container>
          <Section>
            <DeleteUserFormModal>삭제하기</DeleteUserFormModal>
          </Section>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Section = styled.div`
  position: absolute;
  width: 710px;
  top: 375px;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    width: 700px;
  }
  @media only screen and (max-width: 767px) {
    width: 327px;
  }
`;
const DeleteUserFormModal = styled.button`
  white-space: nowrap;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 100px;
  height: 35px;
  left: 610px;
  background: #542f1a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 200px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  transition: all 0.05s ease-in-out;
  &:active {
    transform: scale(0.95);
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    left: 600px;
  }
  @media only screen and (max-width: 767px) {
    width: 70px;
    height: 25px;
    font-size: 10px;
    left: 257px;
  }
`;
