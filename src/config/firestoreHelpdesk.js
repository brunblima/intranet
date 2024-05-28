import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyVKFpNge_HGfkwX-bShpCepQjhcrvrB8",
  authDomain: "helpdesk-6f4ab.firebaseapp.com",
  projectId: "helpdesk-6f4ab",
  storageBucket: "helpdesk-6f4ab.appspot.com",
  messagingSenderId: "394866809654",
  appId: "1:394866809654:web:0ec87080415d067e3c3197"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default { app, db }