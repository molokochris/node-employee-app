// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2TT-5_MTp-cf8AZE3Jl0bFCvlZUkYmD4",
  authDomain: "node-employee-app-5e484.firebaseapp.com",
  projectId: "node-employee-app-5e484",
  storageBucket: "node-employee-app-5e484.appspot.com",
  messagingSenderId: "891288967075",
  appId: "1:891288967075:web:e0b66dc2d5624640ddec16",
  measurementId: "G-D9LDVYG8WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();