import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import users from '../api/mock.json';

const WhoQuestion = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  bottom: 5px;
  font-size: 40px;
`;

const DropDownButtonBox = styled.div`
  padding: 30px;
`;

function ListPage() {
  return (
    <>
      <div>
        <ListHeader />
      </div>
      <WhoQuestion>누구에게 질문할까요?</WhoQuestion>
      <DropDownButtonBox>
        <DropDownButton />
      </DropDownButtonBox>
      <div>
        <UserCard users={users} />
      </div>
    </>
  );
}

export default ListPage;
