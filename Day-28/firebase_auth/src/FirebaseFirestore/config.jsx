import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHqpMK-s6hlHWf148OVKlzw-1vQw1Jc8I",
    authDomain: "fir-auth-email-password-f5782.firebaseapp.com",
    projectId: "fir-auth-email-password-f5782",
    storageBucket: "fir-auth-email-password-f5782.appspot.com",
    messagingSenderId: "471417438725",
    appId: "1:471417438725:web:d54b86198502089810926c"
  };
  
  // Initialize Firebase
  // eslint-disable-next-line no-unused-vars
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth();
  export default app;