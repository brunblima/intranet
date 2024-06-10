import styled from "styled-components";
import themes from "../../themes/themes";

export const NoticeBoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }
`;

export const NoticeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 27%;
  height: auto;
  background-color: ${themes.BACKGROUND};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  
  @media (max-width: 768px) {
    width: 70%;
  }
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
  aspect-ratio: auto;
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

export const NoticeContent = styled.div`
  font-size: 16px;
  color: #666;
`;
