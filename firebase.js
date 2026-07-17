// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8hUoLtSQQOJ4kXZxFz4phxxWw8WMFdj4",
  authDomain: "securxperts-website-5eda1.firebaseapp.com",
  projectId: "securxperts-website-5eda1",
  storageBucket: "securxperts-website-5eda1.firebasestorage.app",
  messagingSenderId: "754169509633",
  appId: "1:754169509633:web:958f0afd78c1b061c88d00",
  measurementId: "G-MGXFPQ0Z0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);