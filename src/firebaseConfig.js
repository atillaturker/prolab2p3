// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_uOfvvYgZekYtbZfDZ7QHMDhlWiyJicU",
  authDomain: "prolab2p3.firebaseapp.com",
  projectId: "prolab2p3",
  storageBucket: "prolab2p3.appspot.com",
  messagingSenderId: "423727532716",
  appId: "1:423727532716:web:35fd6ac391c42861e5ad09",
};

// Initialize Firebase
export const APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(APP);
export const FIREBASE_DB = getFirestore(APP);
