import React, { useState } from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../images/mainbgImg.svg';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14';

function CreateFeed() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function getUserIdFromLocalStorage(name) {
    const storedData = localStorage.getItem(name);

    if (storedData) {
      const dataObject = JSON.parse(storedData);
      return dataObject.id;
    } else {
      return null;
    }
  }
  //GET /{team}/subjects/{id}/
  const handleSubmit = async () => {
    const userId = getUserIdFromLocalStorage(name);

    if (!userId) {
      await fetch(`${BASE_URL}/subjects/`, {
        method: 'POST',
        body: JSON.stringify({ name, team: '6-14' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert(`${name}님 피드가 등록되었습니다`);

      const response = await fetch(`${BASE_URL}/subjects/?name=${name}`);
      const data = await response.json();
      const id = data.id;
      navigate(`/post/${id}/answer`);
    } else {
      const response = await fetch(`${BASE_URL}/subjects/?name=${name}`);
      const data = await response.json();
      const id = data.id;

      alert(`${name}님 페이지로 이동합니다`);

      navigate(`/post/${id}/answer`);
    }
  };
  return (
    <>
      <Header>
        <img alt='' src={logo} />
      </Header>
      <InputContainer>
        <Input
          type='text'
          value={name}
          placeholder='이름을 입력하세요'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button onClick={handleSubmit}>질문 받기</Button>
      </InputContainer>
      <div>
        <BackgroundImg src={backgroundImg} alt='' />
      </div>
    </>
  );
}

export default CreateFeed;

const BackgroundImg = Styled.img`
  position: relative;
  width: 100%;
`;
const InputContainer = Styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;  
  gap: 16px;
  background-color: pink;
  padding: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: 400px;
  z-index: 1;
  position: absolute;
  top: 364px;
  right: 400px;
  left: 400px;
  bottom: 296px;
  

`;
const Header = Styled.header`
  display: flex; 
  margin: auto;
  width: 456px;
  height: 180px;
  z-index: 1;
  position: absolute;
  overflow: visible;
  background-color: yellow;
  left: 372px;
  bottom: 492px;
  right: 372px;
  top: -45px;
  margin-top: 120px;
`;
const Input = Styled.input`
  width: 336px;
  height: 46px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  gap: 4px;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400;
  color: rgba(129, 129, 129, 1);
  `;

const Button = Styled.button`
  background-color: rgba(84, 47, 26, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 400px;
  width: 336px;
  height: 46px;
  padding: 12px 24px 12px 24px;
  gap: 8px;
  border-radius: 8px;
  `;
