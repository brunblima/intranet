import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyVKFpNge_HGfkwX-bShpCepQjhcrvrB8",
  authDomain: "helpdesk-6f4ab.firebaseapp.com",
  projectId: "helpdesk-6f4ab",
  storageBucket: "helpdesk-6f4ab.appspot.com",
  messagingSenderId: "394866809654",
  appId: "1:394866809654:web:0ec87080415d067e3c3197",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const authfb = getAuth(app);
const db = getFirestore(app);

export { authfb, app, signInWithEmailAndPassword, db, storage };
