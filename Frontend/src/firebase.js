
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6Y9Y33lSz9mTrzrbqNYpHTJ7wzVB6dcU",
  authDomain: "portfolio-contact-4ff53.firebaseapp.com",
  databaseURL: "https://portfolio-contact-4ff53-default-rtdb.firebaseio.com",
  projectId: "portfolio-contact-4ff53",
  storageBucket: "portfolio-contact-4ff53.firebasestorage.app",
  messagingSenderId: "174147933822",
  appId: "1:174147933822:web:1eb53c395c78f9bdc96a2f",
  measurementId: "G-W4ZDDHQCJW",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
