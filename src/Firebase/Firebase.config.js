// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2w6Amj3XZQnDkEJoSLoVXQuu5jDA_AUA",
  authDomain: "dagone-news-autgh.firebaseapp.com",
  projectId: "dagone-news-autgh",
  storageBucket: "dagone-news-autgh.appspot.com",
  messagingSenderId: "359698580337",
  appId: "1:359698580337:web:a687769c363603b24eacd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;