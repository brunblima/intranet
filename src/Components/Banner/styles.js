import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 340px;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
`;

export const AddImageButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EditImageButton = styled.button`
 position: absolute;
 left: 50%;
 top: 17%;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
`;
