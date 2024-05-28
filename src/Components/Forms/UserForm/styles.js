import styled from "styled-components";
import themes from "../../../themes/themes";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 4% 2% 4% 2%;
  margin-top: 20px;
  gap: 2%;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerButton = styled.div`
  position: absolute;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
