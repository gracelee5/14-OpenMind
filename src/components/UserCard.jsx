import { Link } from 'react-router-dom';
import QuestionMark from '../images/QuestionMark.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const UserCardGlobal = styled.div`
  display: grid;
  gap: 32px 8px;
  width: 940px;
  height: 474px;

  @media (min-width: 375px) {
    margin: 0 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 32px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 24px;
  }
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
  min-width: 186px;
  font-family: 'pretendard';
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
  const navigate = useNavigate();
  const localId = localStorage.getItem('id'); // 로컬 아이디 가져오기

  const handleCardClick = (subjectId) => {
    if (localId == subjectId) {
      navigate(`/post/${subjectId}/answer`); // 로컬 아이디와 subjectId가 같으면 다른 경로로 이동
    } else {
      navigate(`/post/${subjectId}`); // 로컬 아이디와 subjectId가 다르면 기본 경로로 이동
    }
  };
  return (
    <UserCardBox onClick={() => handleCardClick(results.id)}>
      <PersnoalImage>
        <ImageBox>
          <img src={results.imageSource} alt={results.name} />
        </ImageBox>
      </PersnoalImage>
      <PersnoalName>{results.name}</PersnoalName>
      <PersnoalQuestion>
        <img src={QuestionMark} alt='받은 질문' />
        <Link to={`/post/:id`}> 받은 질문 </Link>
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
      </UserCardGlobal>
    </AllDiv>
  );
}

export default UserCard;
