import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const getNotices = async () => {
  const notices = [
    {
      title: "Meu RH",
      content: "Acesse.",
      image: require("../../assets/MeuRH.png"),
    },
  ];

  return notices;
};

export { getNotices };
