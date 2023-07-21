// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUKLD0DJZTlTWmSjBiE-m7eO8b3p8EWIg",
  authDomain: "react-netflix-clone-aa95e.firebaseapp.com",
  projectId: "react-netflix-clone-aa95e",
  storageBucket: "react-netflix-clone-aa95e.appspot.com",
  messagingSenderId: "762224584597",
  appId: "1:762224584597:web:6e6e48feff0d162d65b89c",
  measurementId: "G-70JYPB4NR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

