import styled from "styled-components";
import { Link } from "react-router-dom";
import themes from "../../themes/themes";

export const ContainerNews = styled.div`
  display: flex;
  flex: wrap;
  justify-content: space-evenly;
  margin-bottom: 5%;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 29%;
  height: auto;
  border: 1px solid ${themes.BORDER};
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
  vertical-align: top;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  width: 20%;
  height: auto;
  border-radius: 8px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Tag = styled.span`
  background-color: #007bff;
  color: ${themes.FONT};
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Author = styled.span`
  font-size: 14px;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
