// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-35385.firebaseapp.com",
  projectId: "mern-blog-35385",
  storageBucket: "mern-blog-35385.appspot.com",
  messagingSenderId: "630309470573",
  appId: "1:630309470573:web:bbee6b2ee58e0924895a64"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
