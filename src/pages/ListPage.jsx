import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import UserCard from '../components/UserCard';
import styled from 'styled-components';

const WhoQuestion = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 100px;
  bottom: 5px;
  font-size: 40px;
`;

function ListPage() {
  return (
    <>
      <div>
        <ListHeader />
      </div>
      <WhoQuestion>누구에게 질문할까요?</WhoQuestion>
      <DropDownButton />
      <UserCard />
    </>
  );
}

export default ListPage;
