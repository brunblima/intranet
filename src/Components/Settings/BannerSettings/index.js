import React, { useState, useEffect } from "react";
import Modal from "../../Modal";
import { db } from "../../../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

const BannerSettings = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBannerImages = async () => {
      try {
        const docRef = doc(db, "settings", "banner");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setImages(docSnap.data().urls || []);
        }
      } catch (error) {
        console.error("Error fetching banner images:", error);
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
    <div>
      <h2>Configurações de Banner</h2>
      <Modal
        onSelectImages={handleImageSelect}
        initialSelectedImages={images}
      />
    </div>
  );
};

export default BannerSettings;
