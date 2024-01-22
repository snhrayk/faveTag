// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT0Nsg_Q-QLrs_c5UaPn2KXZPze1pwghE",
  authDomain: "favetag-98729.firebaseapp.com",
  projectId: "favetag-98729",
  storageBucket: "favetag-98729.appspot.com",
  messagingSenderId: "1067167602538",
  appId: "1:1067167602538:web:3ae8df2a0ae91de3b1b713",
  measurementId: "G-BJF3WSER28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
