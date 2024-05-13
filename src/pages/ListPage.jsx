import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import { useState } from 'react';
import { ListApi } from '../api/Listapi';

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
  const [items, setItems] = useState([]);

  const handleLoadClick = async () => {
    const { results } = await ListApi();
    setItems(results);
  };

  return (
    <>
      <header>
        <ListHeader />
      </header>
      <main>
        <WhoQuestion>누구에게 질문할까요?</WhoQuestion>

        <DropDownButtonBox>
          <DropDownButton />
        </DropDownButtonBox>

        <UserCard items={items} />
        <button onClick={handleLoadClick}>불러오기</button>
      </main>

      <footer></footer>
    </>
  );
}

export default ListPage;
