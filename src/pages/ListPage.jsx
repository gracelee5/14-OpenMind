import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import { useEffect, useState } from 'react';
import { ListApi } from '../api/Listapi';
import ReactPaginate from 'react-paginate';

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

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin: 50px 16px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    cursor: pointer;
  }
  li.previous a,
  li.next a {
    color: #62b6b7;
  }
  li.active a {
    color: #91cccd;
    font-weight: 700;
    min-width: 32px;
  }
  li.disabled a {
    color: 15px;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

function ListPage() {
  const [items, setItems] = useState([]);
  const [maxCount, setMaxCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(maxCount / itemsPerPage);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 ListApi 호출
    const fetchData = async () => {
      const { results, count } = await ListApi(itemOffset);
      setItems(results);
      setMaxCount(count);
    };

    fetchData(); // fetchData 함수 호출
  }, [itemOffset]); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  useEffect(() => {
    // items 값이 변경될 때 UserCard 호출
    UserCard(items);
  }, [items]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
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
        <UserCard results={items} />
      </main>

      <MyPaginate
        firstPage={currentItems}
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< '
        renderOnZeroPageCount={null}
        containerClassName='pagination justify-content-center'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        activeClassName='active'
      />
    </>
  );
}

export default ListPage;
