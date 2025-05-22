// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBARMEdonHo6VHeM3il6-OK1rxrvcDQAEI",
  authDomain: "material-ui-project-ech.firebaseapp.com",
  projectId: "material-ui-project-ech",
  storageBucket: "material-ui-project-ech.firebasestorage.app",
  messagingSenderId: "413727787115",
  appId: "1:413727787115:web:021935391582be1139092e",
  measurementId: "G-Q3B7ZPY97H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
