import React, { useState } from 'react';
import Styled from 'styled-components';
import backgroundImg from '../../images/mainbgImg.svg';
import logo from '../../images/logo.svg';
import Person from '../../images/icons/Person.svg';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://openmind-api.vercel.app/6-14';

function getUserIdFromLocalStorage(name) {
  if (isNameInLocalStorage(name)) {
    const storedData = localStorage.getItem(name);
    const dataObject = JSON.parse(storedData);
    return dataObject.id;
  } else {
    return null;
  }
}
function isNameInLocalStorage(name) {
  const storedData = localStorage.getItem(name);
  return storedData !== null;
}

function CreateFeed() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const userId = getUserIdFromLocalStorage(name);
    if (!userId) {
      const response = await fetch(`${BASE_URL}/subjects/`, {
        method: 'POST',
        body: JSON.stringify({ name, team: '6-14' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const id = data.id;

      localStorage.setItem(name, JSON.stringify({ id }));

      alert(`${name}님 피드가 등록되었습니다`);

      navigate(`/post/:id/answer`);
    } else {
      alert(`${name}님 페이지로 이동합니다`);

      navigate(`/post/${userId}/answer`);
    }
  };
  return (
    <>
      <Header>
        <img alt='' src={logo} />
      </Header>
      <InputContainer>
        <IconImage src={Person} alt='' />
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

const IconImage = Styled.img`
  position: absolute;
  left: 45px; /* 원하는 위치로 조정 */
  top: 32%; /* 이미지를 수직으로 중앙에 위치시키기 위한 설정 */
  transform: translateY(
    -50%
  ); /* 이미지를 수직으로 중앙에 위치시키기 위한 설정 */
  z-index: 1;
`;

const BackgroundImg = Styled.img`
  position: relative;
  width: 100%;
  margin-top: auto;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    margin-bottom: 0px;
    width: 100%;
    // height: 100vh;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }

`;
const InputContainer = Styled.div`
  margin: 0 auto;
  gap: 16px;
  background-color: rgba(255, 255, 255, 1);
  padding: 32px;
  border-radius: 16px;
  width: 400px;
  height: 172px;
  z-index: 1;
  position: absolute;
  top: 364px;
  right: 400px;
  left: 400px;
  flex-direction: column;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    left: 184px;
    top: 500px;

  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
  

`;
const Header = Styled.header`
  display: flex; 
  margin: auto;
  width: 456px;
  height: 180px;
  z-index: 1;
  position: absolute;
  overflow: visible;
  // background-color: yellow;
  left: 372px;
  bottom: 492px;
  right: 372px;
  top: -45px;
  margin-top: 160px;

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 456px;
    height: 180px;
    top: 160px;
    left: 156px;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
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
  position: absolute;
  padding-left: 40px;
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
  position: absolute;
  bottom : 32px;
  `;
