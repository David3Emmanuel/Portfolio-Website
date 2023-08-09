// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6mnW-icb9zYZ2YxcxYirSm36WFo121s",
  authDomain: "david-emmanuel.firebaseapp.com",
  databaseURL: "https://david-emmanuel-default-rtdb.firebaseio.com",
  projectId: "david-emmanuel",
  storageBucket: "david-emmanuel.appspot.com",
  messagingSenderId: "576650131785",
  appId: "1:576650131785:web:57553f0d9eccd10a738298",
  measurementId: "G-XR997ZZKZK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);