// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpPpGyY8HCrpxp3rNzSo-sibMZ7yW_EXE",
  authDomain: "petshop-sebastian-karp.firebaseapp.com",
  projectId: "petshop-sebastian-karp",
  storageBucket: "petshop-sebastian-karp.appspot.com",
  messagingSenderId: "98512831605",
  appId: "1:98512831605:web:f01fa13bf53f245bcba43c",
  measurementId: "G-5H6GE9HEMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
