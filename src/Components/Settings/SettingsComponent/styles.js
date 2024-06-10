import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#fff" : "#f0f0f0")};
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid #007bff" : "none")};
  outline: none;
  &:hover {
    background: #e0e0e0;
  }
`;

export const TabContent = styled.div`
  padding: 20px;
  background: #fff;
`;