import styled from "styled-components";
import themes from "../../../themes/themes"

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
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  width: 450px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Selector = styled.select`
  width: 100%;
  height: 30px;
  padding: 6px;
  margin-bottom: 16px;
  border: 1px solid ${themes.BORDER};
  border-radius: 4px;
`;
export const Option = styled.option`

`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${themes.BORDER};
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${themes.BORDER};
  border-radius: 4px;
  text-align: start;
  resize: none;
  font-family: inherit;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  width: 100%;
  padding: 12px;
  background-color: ${themes.BUTTON};
  color: ${themes.FONT};
  border: none;
  border-radius: 4px;
  cursor: pointer;
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

export const SelectImage = styled.input.attrs({
  type: "file",
  accept: "image/*",
})`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${themes.BORDER};
  border-radius: 4px;
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

export const SelectedImage = styled.img`
  max-width: 100px;
  border-radius: 10px;
  height: auto;
  margin-top: 16px;
`;

export const RemoveImageButton = styled.button`
  background-color: ${themes.BUTTON_CLOSE};
  color: ${themes.FONT};
  border: none;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;

export const ContainerCarousel = styled.div``;

