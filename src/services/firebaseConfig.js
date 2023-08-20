import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqi0N0nQmx45KQ7Dq9Ww9EUmHuE3_8ugg",
    authDomain: "aplicacion-35d91.firebaseapp.com",
    projectId: "aplicacion-35d91",
    storageBucket: "aplicacion-35d91.appspot.com",
    messagingSenderId: "163333881964",
    appId: "1:163333881964:web:3b76f555e2584b8cd79849"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)