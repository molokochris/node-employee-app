// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi43Nu__b_upv2ML2t3hviZwwUY2J95SE",
  authDomain: "mlab-47013.firebaseapp.com",
  projectId: "mlab-47013",
  storageBucket: "mlab-47013.appspot.com",
  messagingSenderId: "104876799417",
  appId: "1:104876799417:web:c3b02b361e34f35150f268",
  measurementId: "G-1MVCSBZEDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();