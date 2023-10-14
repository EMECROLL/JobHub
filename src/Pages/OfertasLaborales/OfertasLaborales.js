// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo5YcjQgAx2ug81weHWERGEeGXsfR-DCM",
  authDomain: "proyecto2023-7a680.firebaseapp.com",
  projectId: "proyecto2023-7a680",
  storageBucket: "proyecto2023-7a680.appspot.com",
  messagingSenderId: "436013359138",
  appId: "1:436013359138:web:d873b7e378eb3fdb722a7b",
  measurementId: "G-NT60EQQJY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);