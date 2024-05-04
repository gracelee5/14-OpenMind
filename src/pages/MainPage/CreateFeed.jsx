import React, { useState } from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../images/mainbgImg.svg';
import logo from '../../images/logo.svg';

const BASE_URL = 'https://openmind-api.vercel.app/6-14';

function CreateFeed() {
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await fetch(`${BASE_URL}/subjects/`, {
      method: 'POST',
      body: JSON.stringify({ name, team: '6-14' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    alert(`${name}님 피드가 등록되었습니다`);
  };

  //if 아이디 있는지 확인
  // 있다면
  // 피드 생성 하지 않고
  // 없다면
  // post아이디 피드 생성 하고
  // 해당페이지로 이동 "/post/{id}/answer" 로 이동

  return (
    <Background backgroundImg={backgroundImg}>
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
    </Background>
  );
}

export default CreateFeed;

const Background = Styled.div`
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 159px 400px 296px 400px;
  position: relative;
  z-index: auto;
  margin-top: 205px;
  
  
`;
const InputContainer = Styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;  
  gap: 16px;
  background-color: pink;
  padding: 32px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  width: 400px;
  z-index: 1;
  

`;
const Header = Styled.header`
  display: flex; 
  margin: auto;
  width: 456px;
  height: 180px;
  z-index: 1;
  position: absolute;
  overflow: visible;
  background-color: blue;
  left: 372px;
  bottom: 492px;
  right: 372px;
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
