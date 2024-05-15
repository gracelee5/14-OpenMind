import ListHeader from '../components/ListHeader';
import DropDownButton from '../components/DropdownButton';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import users from '../api/mock.json';
import React, { useState } from 'react';

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
  const [order, setOrder] = useState('createdAt');

  const handleNameClick = () => setOrder('name');

  const handleNewestClick = () => setOrder('createdAt');

  return (
    <>
      <ListHeader />

      <WhoQuestion>누구에게 질문할까요?</WhoQuestion>

      <DropDownButtonBox>
        <DropDownButton
          handleNameClick={handleNameClick}
          handleNewestClick={handleNewestClick}
        />
      </DropDownButtonBox>

      <UserCard users={users} order={order} />
    </>
  );
}

export default ListPage;
