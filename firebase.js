// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh1FQeKbo1ewbdBzj3kBVQq5DiDa8n0wU",
  authDomain: "securxperts-website-93bcc.firebaseapp.com",
  projectId: "securxperts-website-93bcc",
  storageBucket: "securxperts-website-93bcc.firebasestorage.app",
  messagingSenderId: "929773580765",
  appId: "1:929773580765:web:fe4bf3bd78ee2b02960634",
  measurementId: "G-X4MWYMF9V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);