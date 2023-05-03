// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7bCgZQjrrcRS9SJrT4M3FY697ieyvqYg",
  authDomain: "chef-recipe-hunter-client-side.firebaseapp.com",
  projectId: "chef-recipe-hunter-client-side",
  storageBucket: "chef-recipe-hunter-client-side.appspot.com",
  messagingSenderId: "1026382162275",
  appId: "1:1026382162275:web:a1667faf726f6a4c5b8b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;