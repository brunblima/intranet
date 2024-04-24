import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 6px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 0 16px;
  color: #e1ecff;
  transition: background 0.3s;
  background-color: transparent;
  border: none;
  margin-top: auto;
  margin-bottom: 10px;

  ${({ isActive }) =>
    isActive &&
    `
    background: #004fee;
  `}

  &:hover {
    background: #2e303e;
  }

  &:hover span {
    color: #e1ecff;
  }
`;
