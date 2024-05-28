import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectedImage = styled.img`
  width: 90%;
  height: 100px;
  border-radius: 8px;
`;

export const RemoveImageButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: #ff0000;
  }
`;
