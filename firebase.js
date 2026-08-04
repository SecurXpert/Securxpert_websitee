// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBssZ2u0pscaQ-X6ciNEiWh0DgxZFBeW5k",
  authDomain: "securxperts-website-71913.firebaseapp.com",
  projectId: "securxperts-website-71913",
  storageBucket: "securxperts-website-71913.firebasestorage.app",
  messagingSenderId: "943230955162",
  appId: "1:943230955162:web:3936b353339eeace6cb923",
  measurementId: "G-KNVHVPXG1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);