// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGYjSKxJUTP8wSE_dmp8hQnp2M3fMyiRM",
  authDomain: "isocial-f0ab4.firebaseapp.com",
  projectId: "isocial-f0ab4",
  storageBucket: "isocial-f0ab4.firebasestorage.app",
  messagingSenderId: "681773842375",
  appId: "1:681773842375:web:7fe085b1cd89d8dc39e3e2",
  measurementId: "G-HRNC7F0Z5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();