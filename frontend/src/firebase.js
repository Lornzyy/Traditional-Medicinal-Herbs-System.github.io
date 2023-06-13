// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpm2RCZszYMJcmD8-hpekPdwUA-QuXdRM",
  authDomain: "tmh--auth.firebaseapp.com",
  projectId: "tmh--auth",
  storageBucket: "tmh--auth.appspot.com",
  messagingSenderId: "295041911241",
  appId: "1:295041911241:web:812b64afbcd6bfa9f34018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
