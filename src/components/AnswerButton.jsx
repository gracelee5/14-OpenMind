import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AButton = styled.button`
display: inline-flex;
    align-items: center;
    margin-left: 30px;
    border: solid;
    border-radius: 4px;
    color: #542F1A;
    font-weight: bold;
    cursor: pointer;
    height: 2.25rem;
    font-size: 1rem;
    background: #E4D5C9;
    &:hover{    
        background: #F5F1EE;
    }
    &:active{
        background: #F5F1EE;
        & + & {
            margin-left: 1rem;
        }
`;

function AnswerButton({ children, ...rest }) {
  return <AButton {...rest}>{children}</AButton>;
}

AnswerButton.propTypes = {
  children: PropTypes.node.isRequired,
  //children에서 오류가 나서 해결하려고 넣었어요! 개발할 때 지우고 하셔도 돼요!
};

export default AnswerButton;
