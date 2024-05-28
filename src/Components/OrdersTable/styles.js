import styled from "styled-components";
import themes from "../../themes/themes";

export const TableContainer = styled.div`
  margin-top: 10px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const TableHeader = styled.thead`
  background-color: ${themes.CINZAPADRAO};
  color: #ffff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: 600;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #d3d3d3;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  height: 50px;
  font-weight: 400;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 10px;
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  margin: 0 5px;
  background-color: ${themes.CINZAPADRAO};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${themes.AZULPADRAO};
  }
`;
