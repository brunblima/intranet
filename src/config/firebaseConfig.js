import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKL8SZlryrP9WeaMZ1NZas3k62BflCIxo",
  authDomain: "intranet-e2f57.firebaseapp.com",
  projectId: "intranet-e2f57",
  storageBucket: "intranet-e2f57.appspot.com",
  messagingSenderId: "402014400846",
  appId: "1:402014400846:web:47d672c01544171e92ae1f",
  measurementId: "G-51W00CCGWX"
};

const app = initializeApp(firebaseConfig);
const authfb = getAuth(app); 

export { authfb, app, signInWithEmailAndPassword }; 