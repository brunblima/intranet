import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import {
  MainContainer,
  BannerContainer,
  Image,
  Placeholder,
  EditImageButton,
} from "./styles";
import { Button } from "../Controllers/Button";
import Carousel from "../Carousel";
import { db } from "../../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loading from "../Animation/Loading";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const docRef = doc(db, "settings", "banner");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setImages(docSnap.data().urls || []);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banner images:", error);
        setLoading(false);
      }
    };

    fetchBannerImages();
  }, []);

  const handleImageSelect = async (selectedImages) => {
    try {
      await setDoc(doc(db, "settings", "banner"), { urls: selectedImages });
      setImages(selectedImages);
    } catch (error) {
      console.error("Error saving banner images:", error);
    }
  };

  return (
    <MainContainer>
      <BannerContainer>
        {loading ? (
          <Loading />
        ) : (
          <>
            {images.length > 0 ? (
              <>
                <Carousel images={images} />
                <EditImageButton onClick={() => setShowModal(true)}>
                  Editar
                </EditImageButton>
              </>
            ) : (
              <Placeholder>
                <p>Nenhuma imagem selecionada.</p>
                <Button onClick={() => setShowModal(true)}>Adicionar Imagem</Button>
              </Placeholder>
            )}
          </>
        )}
        {showModal && (
          <Modal
            onClose={() => setShowModal(false)}
            onSelectImages={handleImageSelect}
            initialSelectedImages={images}
          />
        )}
      </BannerContainer>
    </MainContainer>
  );
};

export default Banner;
