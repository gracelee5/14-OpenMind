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
  position: relative;
  bottom: 1px;
`;

const PersnoalImage = styled.div`
  width: 180px;
  height: 97px;
  gap: 12px;
  padding: 16px;
  border: 1px;
  border-radius: 16px;
`;

const PersnoalName = styled.h1`
  padding: 20 5;
`;

function UserInformation({ usercarddata }) {
  return (
    <UserCardBox>
      <PersnoalImage>
        <img
          src={usercarddata.imageSource}
          width='60px'
          height='60px'
          alt={usercarddata.name}
        />
        <PersnoalName>{usercarddata.name}</PersnoalName>
      </PersnoalImage>
      <PersnoalQuestion>
        <img src={QuestionMark} alt='받은 질문' />
        <Link to='/post'> 받은 질문 </Link>
        <CountNumber> {usercarddata.questionCount} 개</CountNumber>
      </PersnoalQuestion>
    </UserCardBox>
  );
}

function UserCard({ users }) {
  return (
    <UserCardGlobal>
      {users &&
        users.map(function (usercarddata) {
          return (
            <div key={usercarddata}>
              <UserInformation usercarddata={usercarddata} />
            </div>
          );
        })}
      ;
    </UserCardGlobal>
  );
}

export default UserCard;
