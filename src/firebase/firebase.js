import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkDg26WCOun06UC6zuEGwYuL4wJJbQayI",
  authDomain: "coder-celulares.firebaseapp.com",
  projectId: "coder-celulares",
  storageBucket: "coder-celulares.appspot.com",
  messagingSenderId: "634034027904",
  appId: "1:634034027904:web:adf06a27a986329a941565"
};

const app = initializeApp(firebaseConfig)
export const db= getFirestore(app)