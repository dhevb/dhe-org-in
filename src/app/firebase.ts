// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectStorageEmulator } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-J_ztlNIuwNd_5jyC4dXubfcXOGK0AGc",
  authDomain: "sarvatr-5b98a.firebaseapp.com",
  projectId: "sarvatr-5b98a",
  storageBucket: "sarvatr-5b98a.appspot.com",
  messagingSenderId: "717953679906",
  appId: "1:717953679906:web:ee1155beb6088b3b99007b",
  measurementId: "G-DWBE7BSNBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage();

export {app, db , storage}
