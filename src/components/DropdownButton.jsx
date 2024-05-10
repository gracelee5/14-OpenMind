import React from 'react';
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
`;

const DropLi = styled.li`
  list-style: none;
  cursor: pointer;
  color: #818181;
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

const DropDown = styled.button`
  border: none;
  outline: none;
  position: relative;
  width: 80px;
`;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 9px;
  position: absolute;
  display: none;
  left: -13px;
  padding: 4px 0px;
  height: 68px;
  width: 79px;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0px 4px 4px rgba(140, 140, 140, 0.25);
  border-radius: 8px;
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
