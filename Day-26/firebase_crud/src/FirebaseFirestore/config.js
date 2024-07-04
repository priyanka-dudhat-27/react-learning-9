/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC5ECVazsTm8VcSK5WTaT65tFEPaKrIX4c",
    authDomain: "fir-project-d9bdb.firebaseapp.com",
    projectId: "fir-project-d9bdb",
    storageBucket: "fir-project-d9bdb.appspot.com",
    messagingSenderId: "270392973917",
    appId: "1:270392973917:web:89b3985d87c7a0acca8bb4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const database=getFirestore(app)