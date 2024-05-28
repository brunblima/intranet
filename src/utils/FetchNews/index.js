import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

const fetchNews = async () => {
  try {
    const newsCollectionRef = collection(db, "noticias");
    const snapshot = await getDocs(newsCollectionRef);

    // Mapeie os documentos recuperados em um array de objetos de notícias
    const newsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    newsData.sort((a, b) => b.id - a.id);

    return newsData; // Retorne os dados das notícias
  } catch (error) {
    console.error("Erro ao recuperar notícias: ", error);
    return []; // Retorne um array vazio em caso de erro
  }
};

export default fetchNews;
