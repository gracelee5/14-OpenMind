import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // 컴포넌트가 마운트될 때 ListApi 호출
    const fetchData = async () => {
      const { results } = await ListApi();
      setItems(results);
    };

    fetchData(); // fetchData 함수 호출
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    // items 값이 변경될 때 UserCard 호출
    UserCard(items);
  }, [items]);

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
        <UserCard results={items} />
      </main>

      <footer></footer>
    </>
  );
}

export default ListPage;
