// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDiE7cWVODqw0rS4CsVNu1Bqy5EhPGxtm0",
  authDomain: "budget-app-70fda.firebaseapp.com",
  projectId: "budget-app-70fda",
  storageBucket: "budget-app-70fda.appspot.com",
  messagingSenderId: "1082944891130",
  appId: "1:1082944891130:web:171766b5ecfcbf01f14143",
  measurementId: "G-BRRXG7RKNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const analytics = getAnalytics(app);

export {auth};