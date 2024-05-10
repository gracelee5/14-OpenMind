import QuestionMark from '../images/QuestionMark.svg';
import styled from 'styled-components';

const UserCardBox = styled.div`
  width: 220px;
  height: 187px;
  border: 1px solid #000;
  box-sizing: border-box;
`;

function UserInformation({ usercarddata }) {
  return (
    <UserCardBox>
      <img src={usercarddata.imageSource} alt={usercarddata.name} />
      <div>
        <h1>{usercarddata.name}</h1>
        <p>
          <img src={QuestionMark} alt='받은 질문' />
          받은 질문
        </p>
        <p>count</p>
      </div>
    </UserCardBox>
  );
}

function UserCard({ users }) {
  return (
    <ul>
      {users &&
        users.map(function (usercarddata) {
          return (
            <div key={usercarddata}>
              <UserInformation usercarddata={usercarddata} />
            </div>
          );
        })}
      ;
    </ul>
  );
}

export default UserCard;
