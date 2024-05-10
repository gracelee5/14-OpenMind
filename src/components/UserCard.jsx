import { Link } from 'react-router-dom';
import QuestionMark from '../images/QuestionMark.svg';
import styled from 'styled-components';

const UserCardGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 940px;
  height: 474px;
  top: 261px;
  left: 130px;
`;

const UserCardBox = styled.div`
  width: 220px;
  height: 187px;
  border: 3px solid #000;
  display: inline-block;
  border-radius: 8px;
`;

const UserCardImage = styled.div`
  position: relative;
  top: 10px;
  bottom: 170px;
  width: 60px;
  height: 60px;
`;

const CountNumber = styled.span`
  position: relative;
  left: 100px;
`;

const CatQuestion = styled.div`
  bottom: 200px;
`;

function UserInformation({ usercarddata }) {
  return (
    <UserCardGlobal>
      <UserCardBox>
        <UserCardImage>
          <img src={usercarddata.imageSource} alt={usercarddata.name} />
        </UserCardImage>
        <h1>{usercarddata.name}</h1>
        <CatQuestion>
          <img src={QuestionMark} alt='받은 질문' />
          <Link to='/post'> 받은 질문 </Link>
        </CatQuestion>
        <CountNumber> 9개 </CountNumber>
      </UserCardBox>
    </UserCardGlobal>
  );
}

function UserCard({ users }) {
  return (
    <>
      {' '}
      {users &&
        users.map(function (usercarddata) {
          return (
            <div key={usercarddata}>
              <UserInformation usercarddata={usercarddata} />
            </div>
          );
        })}
      ;
    </>
  );
}

export default UserCard;
