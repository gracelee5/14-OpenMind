import React from 'react';
import styled from 'styled-components';

const AButton = styled.button`
display: inline-flex;
    align-items: center;
    outline: none;
    border: solid;
    border-radius: 4px;
    color: #542F1A;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
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

export default AnswerButton;
