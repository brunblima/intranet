import styled from "styled-components";
import themes from "../../themes/themes"

export const NoticeBoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  justify-content: center;
`;

export const NoticeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 21%;
  height: auto;
  background-color: ${themes.BACKGROUND};
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 0 10px 0 10px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const NoticeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
`;

export const NoticeTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
`;

export const CarouselItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 20px;
  color: #555;
  text-align: center;
  width: 100%;
`;

export const NoticeContent = styled.div`
  font-size: 16px;
  color: #666;
`;
