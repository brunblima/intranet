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
`;

export const ModalContent = styled.div`
  background-color: ${themes.BACKGROUND};
  padding: 25px;
  border-radius: 8px;
  width: 450px;
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

export const ButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 100%;
  padding: 12px;
  background-color: ${themes.BUTTON_CLOSE};
  color: ${themes.FONT};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const GalleryImages = styled.div`
  display: flex;
  height: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 30px;
`;

export const FileInputButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  background-color: ${themes.BUTTON};
  color: ${themes.FONT};
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;
