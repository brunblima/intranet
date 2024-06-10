import React, { useState, useEffect } from "react";
import { Button } from "../Controllers/Button";
import { storage } from "../../config/firebaseConfig";
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage";
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

import { RiImageAddFill } from "react-icons/ri";

const Modal = ({ onSelectImages, initialSelectedImages }) => {
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
        <h3>Selecione as imagens</h3>
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
          <Button htmlFor="fileInput" style={{ width: 150, height: 35 }}>
            <RiImageAddFill size={20} /> Adicionar Imagem
          </Button>
          <FileInput
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <Button onClick={handleSave} style={{ width: 100, height: 35 }}>
            Salvar
          </Button>
        </Container>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
