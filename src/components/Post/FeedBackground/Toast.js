import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Toast({ setToast, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div>
      <ToastContainer>{text}</ToastContainer>
    </div>
  );
}

Toast.propTypes = {
  setToast: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Toast;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: calc(50% - 167px / 2 + 0.5px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 167px;
  height: 42px;
  background-color: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;
