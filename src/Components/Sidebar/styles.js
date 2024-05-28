import styled from "styled-components";
import themes from "../../themes/themes"

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ isExpanded }) => (isExpanded ? "260px" : "60px")};
  height: 100%;
  padding: 0 16px;
  background: #1d212a;
  border-right: 1px solid ${themes.CINZAPADRAO};
  transition: width 0.4s;

  &:hover {
    width: 260px;
  }
`;
