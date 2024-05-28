import styled from "styled-components";

export const LoginContainer = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 70px 30px 44px;
  border-radius: 22px;
  background: #161616;
  text-align: center;

  @media (min-width: 450px) {
    width: 380px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0 0 34px;
`;

export const Form = styled.form`
  display: grid;
  gap: 16px;
  place-items: center;
  width: 100%;
  margin: 0;
`;

export const TextBox = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

export const IconSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.38);
`;

export const InputField = styled.input`
  width: 80%;
  height: 60px;
  outline: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 0 20px 0 50px;
  color: inherit;

  &:focus {
    border-color: #157ae1;
  }

  &:focus + ${IconSpan} {
    color: #157ae1;
  }
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 44px;
  border-radius: 10px;
  cursor: pointer;
  background: #157ae1;
  color: #f9f9f9;
  border: 0;
  font-family: Ubuntu;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const ForgotPasswordLink = styled.a`
  color: #157ae1;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
`;
