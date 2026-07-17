// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJOHMJD58TFzGMLMSrzzVd1HU8Hx33JsQ",
  authDomain: "securxperts-4d511.firebaseapp.com",
  projectId: "securxperts-4d511",
  storageBucket: "securxperts-4d511.firebasestorage.app",
  messagingSenderId: "946484314705",
  appId: "1:946484314705:web:c5d8f550a7cf506783ee70",
  measurementId: "G-74VM1MEFCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);