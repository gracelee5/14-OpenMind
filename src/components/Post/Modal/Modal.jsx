import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MessageIcon } from '../../../images/Messages.svg';
import { ReactComponent as XIcon } from '../../../images/x.svg';
import profile from '../../../images/profile-img.svg';

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
`;

const ModalTItle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 40px 0 40px;
  width: 532px;
  height: 30px;
`;

const StyledMessageIcon = styled(MessageIcon)`
  stroke: black;
  stroke-width: 0.5;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-left: -260px;
`;

const StyledXIcon = styled(XIcon)`
  &:hover {
    stroke: brown;
  }
`;

const ModalTo = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;
  width: 532px;
  height: 30px;
`;

const To = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  margin-top: 0;
  z-index: 1;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
`;

const InputField = styled.textarea`
  vertical-align: top;
  margin-top: 12px;
  width: 532px;
  height: 180px;
  font-size: 16px;
  color: #818181;
  background-color: #f9f9f9;
  border: none;
  border-radius: 8px;
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
`;

const Modal = ({ onClose }) => {
  const [content, setContent] = useState('');
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSend = () => {
    onClose();
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ModalTItle>
          <StyledMessageIcon />
          <ModalTitle>질문을 작성하세요</ModalTitle>
          <StyledXIcon onClick={onClose} />
        </ModalTItle>
        <ModalTo>
          <To>To.</To>
          <ProfileImg src={profile} alt='profile' />
          <Name>아초는고양이</Name>
        </ModalTo>
        <InputField
          type='text'
          placeholder='질문을 입력해주세요'
          value={content}
          onChange={handleContentChange}
        />
        <SendButton onClick={handleSend}>제출</SendButton>
      </ModalContent>
    </ModalBackground>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
