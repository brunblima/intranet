import styled from "styled-components";
import themes from "../../themes/themes";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const Table = styled.table`
  width: 100%;
  margin: 20px;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: ${themes.CINZAPADRAO};
  color: ${themes.FONT};
  border-collapse: collapse;
`;

export const TableRowHeader = styled.tr``;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: 600;
  border: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${themes.AZULPADRAO};
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
