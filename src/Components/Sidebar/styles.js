import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ isExpanded }) => (isExpanded ? "260px" : "60px")}; /* Altera a largura do Sidebar */
  height: 100%;
  padding: 0 16px;
  background: #1d212a;
  border-right: 1px solid #2e303e;
  transition: width 0.4s; /* Adiciona uma transição suave para a mudança de largura */

  &:hover {
    width: 260px; /* Aumenta a largura do Sidebar quando o mouse está sobre ele */
  }
`;
