import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DeleteUserModal = ({ trigger }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isSendQuestion, setIsSendQuestion] = useState(false);
  const [id, setId] = useState(1111);
  const [recentKey, setRecentKey] = useState(null);

  useEffect(() => {
    if (isSendQuestion) {
      setIsSendQuestion(false);
    }
  }, [isSendQuestion]);

  useEffect(() => {
    if (localStorage.key(0)) {
      // 가장 최근에 저장된 key값을 가져옴
      const recentKey = localStorage.key(0);
      // key값을 이용하여 value값(=id)를 가져옴
      const targetValue = JSON.parse(localStorage.getItem(recentKey));
      setId(targetValue.id);
      setRecentKey(recentKey);
    }
  }, []);

  async function postDeleteUser() {
    try {
      await fetch(`${BASE_URL}subjects/${id}/`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Failed to post question:', error);
      throw new Error('Failed to delete user');
    }
  }

  const BASE_URL = 'https://openmind-api.vercel.app/6-14/';

  const handleDeleteUerFormModalClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSendQuestion = async () => {
    try {
      await postDeleteUser();
      setIsSendQuestion(true);
      setOpenModal(false);
      // location.reload();
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('사용자 삭제에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      if (recentKey) {
        localStorage.removeItem(recentKey);
      }
    }
  };

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: handleDeleteUerFormModalClick,
      })}
      {openModal && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTItle>
              <ModalTitle>
                ⚠️ 사용자 삭제 ⚠️
                <br />
                사용자의 기록과 모든 질문이 완전히 삭제됩니다.
                <br />
                정말 실행하시겠습니까?
              </ModalTitle>
            </ModalTItle>
            <AcceptButton onClick={handleSendQuestion}>예</AcceptButton>
            <CancelButton onClick={handleCloseModal}>아니오</CancelButton>
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 105px);
  transform: translateY(-105px);
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.25);
  width: 762px;
  height: 354px;
  text-align: center;
  @media (max-width: 768px) {
    width: 327px;
    height: 468px;
  }
`;

const ModalTItle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 532px;
  height: 40px;
  margin: 70px auto 70px auto;
  @media (max-width: 768px) {
    width: 279px;
    margin: 90px auto 90px auto;
  }
`;

const ModalTitle = styled.p`
  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  width: 532px;
  height: 46px;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  &:active {
    transform: scale(0.95);
  }
  @media (max-width: 768px) {
    margin-top: 25px;
    width: 279px;
`;

const AcceptButton = styled(Button)`
  background-color: #b93333;
  &:hover {
    box-shadow: 0 0 20px 5px #b93333;
    transition: box-shadow 0.3s;
  }
`;
const CancelButton = styled(Button)`
  background-color: #c7bbb5;
  }
`;

export default DeleteUserModal;
