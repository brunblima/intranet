import React, { useState, useEffect } from "react";
import { Button } from "../Controllers/Button";
import { storage, db } from "../../config/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Loading from "../Animation/Loading";
import {
  ModalOverlay,
  ModalContent,
  Container,
  ButtonClose,
  ImageContainer,
  Thumbnail,
  UploadButton,
  GalleryImages,
  FileInputButton,
  FileInput,
} from "./styles";

import { FaRegImage } from "react-icons/fa6";

const Modal = ({ onClose, onSelectImages, initialSelectedImages }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImages, setSelectedImages] = useState(initialSelectedImages);

  useEffect(() => {
    const getImages = async () => {
      try {
        const storageRef = ref(storage, "banners");
        const imagesList = await listAll(storageRef);
        const urls = await Promise.all(
          imagesList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { url, name: item.name };
          })
        );
        setImages(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images from Firebase Storage:", error);
        setLoading(false);
      }
    };

    getImages();
  }, []);

  const handleImageSelect = (imageUrl) => {
    if (selectedImages.includes(imageUrl)) {
      setSelectedImages(selectedImages.filter((img) => img !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  const handleSave = () => {
    onSelectImages(selectedImages);
    onClose();
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, `banners/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImages([...images, { url, name: file.name }]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Selecione as imagens</h2>
        <GalleryImages>
          {loading ? (
            <Loading />
          ) : (
            images.map((image, index) => (
              <ImageContainer
                key={index}
                onClick={() => handleImageSelect(image.url)}
                style={{
                  border: selectedImages.includes(image.url)
                    ? "1px solid blue"
                    : "none",
                }}
              >
                <Thumbnail src={image.url} alt={image.name} />
              </ImageContainer>
            ))
          )}
        </GalleryImages>
        <Container>
          <FileInputButton htmlFor="fileInput">
            <FaRegImage size={20} /> Adicionar Imagem
          </FileInputButton>
          <FileInput
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </Container>

        <Container>
          <UploadButton onClick={handleSave}>Salvar</UploadButton>
          <ButtonClose onClick={onClose}>Fechar</ButtonClose>
        </Container>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
