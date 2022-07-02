import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANY-3-5qVG3y36wVP5Fdx-ibTL5Z892jY",
  authDomain: "signal-a6f4c.firebaseapp.com",
  projectId: "signal-a6f4c",
  storageBucket: "signal-a6f4c.appspot.com",
  messagingSenderId: "126798809149",
  appId: "1:126798809149:web:7182a5a150906f51bac254"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {auth, db}