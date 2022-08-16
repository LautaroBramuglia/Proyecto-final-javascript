// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkDg26WCOun06UC6zuEGwYuL4wJJbQayI",
  authDomain: "coder-celulares.firebaseapp.com",
  projectId: "coder-celulares",
  storageBucket: "coder-celulares.appspot.com",
  messagingSenderId: "634034027904",
  appId: "1:634034027904:web:adf06a27a986329a941565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase =()=> {
  return app
}