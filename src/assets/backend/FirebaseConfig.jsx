import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDarLC2FWbYDN93ntC05tZxITH_9MoP7YQ",
    authDomain: "taskflow-a1f88.firebaseapp.com",
    projectId: "taskflow-a1f88",
    storageBucket: "taskflow-a1f88.appspot.com",
    messagingSenderId: "113491414653",
    appId: "1:113491414653:web:e48b25135c4e7eb6a0eb14",
    measurementId: "G-Q63HGM94C6"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export default app