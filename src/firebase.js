
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "erp-dashboard-d08b0.firebaseapp.com",
  projectId: "erp-dashboard-d08b0",
  storageBucket: "erp-dashboard-d08b0.appspot.com",
  messagingSenderId: "845602547902",
  appId: "1:845602547902:web:b38461e8a24ec945e9d6ef"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth()