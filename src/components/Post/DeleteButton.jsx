import React from 'react';
import DeleteUserModal from './Modal/DeleteUserModal';
import styled from 'styled-components';

export default function DeleteButton() {
  return (
    <DeleteUserModal
      trigger={<DeleteUserFormModal>삭제하기</DeleteUserFormModal>}
    />
  );
}

const DeleteUserFormModal = styled.button`
  white-space: nowrap;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;
  width: 100px;
  height: 35px;
  top: 375px;
  right: 355px;
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
`;
