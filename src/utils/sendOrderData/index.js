import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, authfb } from "../../config/firebaseConfig";

export const sendOrderData = async ({
  typeService,
  selectedType,
  selectedDevice,
  remoteAccess,
  description,
  location,
  selectedSector,
  selectedImages,
  onClose,
  setIsLoading,
  setShowAlert,
}) => {
  setIsLoading(true);

  // Verificar se há um usuário autenticado
  const user = authfb.currentUser;

  if (user) {
    const userId = user.uid; // Obter o UID do usuário autenticado

    // Obter a contagem atual de pedidos
    try {
      const ordersRef = collection(db, "orders");
      const querySnapshot = await getDocs(ordersRef);
      const orderCount = querySnapshot.size; // Contagem atual de pedidos

      // Preparar URLs das imagens para upload
      const imageUrls = [];
      for (const image of selectedImages) {
        const imageRef = ref(storage, `images/${image}`);
        const imageData = await fetch(image);
        const imageBlob = await imageData.blob();

        try {
          const snapshot = await uploadBytes(imageRef, imageBlob);
          const imageUrl = await getDownloadURL(snapshot.ref);
          imageUrls.push(imageUrl);
        } catch (error) {
          console.error("Erro ao enviar a imagem", image, error);
        }
      }

      // Adicionar o novo documento à coleção "orders"
      await addDoc(collection(db, "orders"), {
        ID: orderCount + 1,
        typeService,
        selectedType,
        selectedDevice,
        remoteAccess,
        description,
        location,
        selectedSector,
        status: "open",
        create_at: serverTimestamp(),
        images: imageUrls,
        createdBy: userId,
      });

      onClose();
      setShowAlert(true);
    } catch (error) {
      console.error("Erro ao adicionar documento:", error);
      setIsLoading(false);
    }
  } else {
    console.error("Nenhum usuário autenticado encontrado.");
    setIsLoading(false);
  }

  setIsLoading(false);
};
