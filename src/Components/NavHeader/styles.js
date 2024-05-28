import styled from "styled-components";
import themes from "../../themes/themes"

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 5px 0 0 4px;
  border-bottom: 1px solid ${themes.CINZAPADRAO};
  color: #e1ecff;

  button {
    width: 50px;
    border: none;
    background-color: transparent;
    color: #e1ecff;
    cursor: pointer;

  }
`;