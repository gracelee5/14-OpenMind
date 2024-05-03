import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as MessageIcon } from '../../../images/Messages.svg';
import { ReactComponent as XIcon } from '../../../images/x.svg';
import profile from '../../../images/profile-img.svg';

// eslint-disable-next-line react/prop-types
const Modal = ({ trigger }) => {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [buttonColor, setButtonColor] = useState('#AAAAAA'); // initial color
  const [isSendQuestion, setIsSendQuestion] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setButtonColor('#542f1a');
      localStorage.setItem('inputValue', inputValue);
    } else {
      setButtonColor('#AAAAAA');
    }
  }, [inputValue]);

  useEffect(() => {
    if (isSendQuestion) {
      localStorage.removeItem('inputValue');
      setIsSendQuestion(false);
    }
  }, [isSendQuestion]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuestionFormButtonClick = () => {
    setInputValue('');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    localStorage.removeItem('inputValue');
  };

  const handleSendQuestion = () => {
    setIsSendQuestion(true);
    setOpenModal(false);
  };

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: handleQuestionFormButtonClick,
      })}
      {openModal && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTItle>
              <StyledMessageIcon />
              <ModalTitle>질문을 작성하세요</ModalTitle>
              <StyledXIcon onClick={handleCloseModal} />
            </ModalTItle>
            <ModalTo>
              <To>To.</To>
              <ProfileImg src={profile} alt='profile' />
              <Name>아초는고양이</Name>
            </ModalTo>
            <InputField
              type='text'
              placeholder='질문을 입력해주세요'
              value={inputValue}
              onChange={handleInputChange}
            />
            <SendButton
              style={{ backgroundColor: buttonColor }}
              onClick={handleSendQuestion}
            >
              질문 보내기
            </SendButton>
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
  width: 612px;
  height: 454px;
  text-align: center;
  @media (max-width: 768px) {
    width: 327px;
    height: 568px;
  }
`;

const ModalTItle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 40px 0 40px;
  width: 532px;
  height: 30px;
  @media (max-width: 768px) {
    width: 279px;
    margin: 24px 24px 0 24px;
  }
`;

const StyledMessageIcon = styled(MessageIcon)`
  stroke: black;
  stroke-width: 0.5;
`;

const ModalTitle = styled.p`
  font-family: 'Actor';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  margin-left: -260px;
  @media (max-width: 768px) {
    margin-left: -55px;
    font-size: 20px;
    line-height: 25px;
  }
`;

const StyledXIcon = styled(XIcon)`
  width: 22.75px;
  height: 22.75px;
  &:hover {
    stroke: brown;
  }
  @media (max-width: 768px) {
    width: 17.88px;
    height: 17.88px;
  }
`;

const ModalTo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 40px 0 40px;
  width: 100%;
  height: 28px;
  @media (max-width: 768px) {
    width: 142px;
    margin: 40px 24px 0 24px;
  }
`;

const To = styled.p`
  width: 23px;
  height: 24px;
  font-family: 'Actor';
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
`;

const ProfileImg = styled.img`
  margin-left: 4px;
  width: 28px;
  height: 28px;
  z-index: 1;
`;

const Name = styled.span`
  margin-left: 4px;
  width: 100px;
  height: 22px;
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  @media (max-width: 768px) {
    white-space: nowrap;
    width: 100%;
  }
`;

const InputField = styled.textarea`
  vertical-align: top;
  margin-top: 12px;
  width: 532px;
  height: 180px;
  padding: 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #818181;
  background-color: #f9f9f9;
  border: none;
  border-radius: 8px;
  resize: none;
  @media (max-width: 768px) {
    width: 279px;
    height: 358px;
  }
`;

const SendButton = styled.button`
  margin-top: 8px;
  width: 532px;
  height: 46px;
  background-color: #c7bbb5;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 768px) {
    width: 279px;
  }
`;

export default Modal;
