import React from "react";
import styled from "styled-components";
import themes from "../../themes/themes"

const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${themes.BACKGROUND};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const AlertTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #000;
`;

const AlertMessage = styled.p`
  margin: 0;
  color: #000;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const AlertButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: ${themes.AZULPADRAO};
  color: ${themes.FONT};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CustomAlert = ({ title, message, onClose }) => {
  return (
    <AlertContainer>
      <AlertTitle>{title}</AlertTitle>
      <AlertMessage>{message}</AlertMessage>
      <Container>
        <AlertButton onClick={onClose}>OK</AlertButton>
      </Container>
    </AlertContainer>
  );
};

export default CustomAlert;
