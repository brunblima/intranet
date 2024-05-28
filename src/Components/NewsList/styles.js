import styled from "styled-components";
import { Link } from "react-router-dom";
import themes from "../../themes/themes";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 30px;
  background-color: ${themes.BACKGROUND};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.text`
  font-size: 26px;
  font-weight: 600;
  font-family: inherit;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  margin: 10px;
`;

export const Description = styled.p`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  width: 10%;
  height: auto;
  border-radius: 8px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;

export const Tag = styled.span`
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Author = styled.span`
  font-size: 14px;
`;
