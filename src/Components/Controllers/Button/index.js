import styled from "styled-components";
import themes from "../../../themes/themes"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  gap: 10px;
  border: none;
  cursor: pointer;
  background-color: ${themes.CINZAPADRAO};
  color: ${themes.FONT};
  border-radius: 4px;

  &:hover {
    background-color: ${themes.AZULPADRAO};
  }
`;