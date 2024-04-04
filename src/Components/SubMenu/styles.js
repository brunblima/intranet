import styled from "styled-components";

export const SubNav = styled.div`
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  transition: 0.5s;
`;