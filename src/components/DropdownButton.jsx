import React, { useState } from 'react';
import styled from 'styled-components';

const DropButton = styled.button`
  margin: 130px auto 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  width: 79px;
  height: 34px;
  border-radius: 8px;
  padding: 8px 12px;
  gap: 4px;
  background: #ffffff;
  border: 1px solid #818181;
  border-radius: 8px;
  &:hover {
    border: 1px solid black;
`;

const DropLi = styled.li`
  // border-radius: 5px;
  // border: 1px solid black;
  list-style: none;
  cursor: pointer;
  color: #818181;
  font-family: 'pretendard';
  &:hover {
    color: black;
  }
`;

const LI = styled.li`
  list-style: none;
  cursor: pointer;
`;

const UI = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #515151;
  width: 47px;
  height: 18px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin: 20px 15px;
  gap: 10px;
`;

// const DropDown = styled.button`
//   border: none;
//   outline: none;
//   position: relative;
//   width: 60px;
// `;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: absolute;
  top: calc(110%);
  display: none;
  height: 68px;
  width: 79px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 4px 4px rgba(140, 140, 140, 0.25);
  border-radius: 8px;
  z-index: 999;
  ${DropButton}:active & {
    display: block;
  }
  ${DropButton}:focus & {
    display: block;
  }
`;

function DropDownButton({ handleNameClick, handleNewestClick }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <LI>
      <DropButton>
        <DropLi>
          {activeItem === 'name'
            ? '이름순'
            : activeItem === 'newest'
              ? '최신순'
              : '최신순'}
        </DropLi>
        <ListContainer>
          <UI>
            {/* 이름순 아이템 */}
            <LI
              onClick={() => {
                handleNameClick();
                setActiveItem('name');
              }}
              style={{
                color: activeItem === 'name' ? 'rgba(24, 119, 242, 1)' : 'gray',
              }}
            >
              이름순
            </LI>
            {/* 최신순 아이템 */}
            <LI
              onClick={() => {
                handleNewestClick();
                setActiveItem('newest');
              }}
              style={{
                color:
                  activeItem === 'newest' ? 'rgba(24, 119, 242, 1)' : 'gray',
              }}
            >
              최신순
            </LI>
          </UI>
        </ListContainer>
      </DropButton>
    </LI>
  );
}

export default DropDownButton;
