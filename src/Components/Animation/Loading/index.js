import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff;
  border-radius: 50%;
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};
  animation: ${spin} 1s linear infinite;
`;

const Loading = ({ size }) => {
  return (
    <LoadingContainer>
      <Spinner size={size} />;
    </LoadingContainer>
  );
};

export default Loading;
