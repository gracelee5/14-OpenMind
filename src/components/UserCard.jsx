import { Link } from 'react-router-dom';
import QuestionMark from '../images/QuestionMark.svg';
import styled from 'styled-components';

const UserCardGlobal = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 8px;
  width: 940px;
  height: 474px;
`;

const AllDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const UserCardBox = styled.div`
  width: 220px;
  height: 187px;
  border: 1px solid #000;
  border-radius: 16px;
`;

const CountNumber = styled.span`
  position: relative;
  left: 70px;
`;

const PersnoalQuestion = styled.div`
  margin-top: 40px;
  margin-right: 20px;
  margin-left: 10px;
`;

const PersnoalImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 70%;
  overflow: hidden;
  margin: 10px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PersnoalName = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
`;

function UserInformation({ results }) {
  return (
    <UserCardBox>
      <PersnoalImage>
        <ImageBox>
          <img src={results.imageSource} alt={results.name} />
        </ImageBox>
      </PersnoalImage>
      <PersnoalName>{results.name}</PersnoalName>
      <PersnoalQuestion>
        <img src={QuestionMark} alt='받은 질문' />
        <Link to='/post'> 받은 질문 </Link>
        <CountNumber> {results.questionCount} 개</CountNumber>
      </PersnoalQuestion>
    </UserCardBox>
  );
}

function UserCard({ results }) {
  return (
    <AllDiv>
      <UserCardGlobal>
        {results &&
          results.map((results) => {
            return (
              <div key={results.id}>
                <UserInformation results={results} />
              </div>
            );
          })}
        ;
      </UserCardGlobal>
    </AllDiv>
  );
}

export default UserCard;
