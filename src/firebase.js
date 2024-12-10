import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNziI6o0Q1iNvTP5iIsvOzHyBepwMu7x4",
  authDomain: "financly-rec.firebaseapp.com",
  projectId: "financly-rec",
  storageBucket: "financly-rec.firebasestorage.app",
  messagingSenderId: "341922554097",
  appId: "1:341922554097:web:88550aaaf5b98c3d640950",
  measurementId: "G-6J084Z3GX0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
