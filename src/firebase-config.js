import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJhIyvCJm36AgY0NnnKrF3sdLn3gL0EFY",
  authDomain: "partstore-auth.firebaseapp.com",
  projectId: "partstore-auth",
  storageBucket: "partstore-auth.appspot.com",
  messagingSenderId: "111660951569",
  appId: "1:111660951569:web:d3313ae1a21ca11270e9b0",
};

const app = initializeApp(firebaseConfig);

export const firebase = getAuth(app);
