// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0LapAILbnpc6aL3D7EnVqxbYCxb_Q_t0",
  authDomain: "website-fa625.firebaseapp.com",
  projectId: "website-fa625",
  storageBucket: "website-fa625.firebasestorage.app",
  messagingSenderId: "63680981953",
  appId: "1:63680981953:web:d73a37e038b1a6c7f65d40",
  measurementId: "G-Y3K7SPJKTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);