

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-e3d7b.firebaseapp.com",
  projectId: "real-state-e3d7b",
  storageBucket: "real-state-e3d7b.appspot.com",
  messagingSenderId: "220827358924",
  appId: "1:220827358924:web:58916b5e17002a2de6d469",
  measurementId: "G-F0QHVF0PTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);