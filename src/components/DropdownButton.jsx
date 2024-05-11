import React from 'react';
import styled from 'styled-components';

const DropButton = styled.button`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  width: 79px;
  height: 34;
  border-radius: 8px;
`;

const DropLi = styled.li`
  border-radius: 5px;
  border: 1px solid black;
  list-style: none;
  cursor: pointer;
`;

const LI = styled.li`
  list-style: none;
  cursor: pointer;
`;

const UI = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 22px;
`;

const DropDown = styled.button`
  border: none;
  outline: none;
  position: relative;
  width: 60px;
`;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 7px;
  position: absolute;
  display: none;
  ${DropDown}:active & {
    display: block;
  }
  ${DropDown}:focus & {
    display: block;
  }
`;

function DropDownButton() {
  return (
    <LI>
      <DropButton>
        <DropDown>
          <DropLi>이름순</DropLi>
          <ListContainer>
            <UI>
              <LI>이름순</LI>
              <LI>최신순</LI>
            </UI>
          </ListContainer>
        </DropDown>
      </DropButton>
    </LI>
  );
}

export default DropDownButton;
