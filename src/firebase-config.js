import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKMm3__B6Fs30cpWmq_wZlXGGny_hb3NE",
  authDomain: "zinggalas.firebaseapp.com",
  projectId: "zinggalas",
  storageBucket: "zinggalas.appspot.com",
  messagingSenderId: "202013466837",
  appId: "1:202013466837:web:14c3c4d32ceac68ac2025c",
};

const app = initializeApp(firebaseConfig);

export const firebase = getAuth(app);
