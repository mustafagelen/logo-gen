import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhA1oBHHc-vjHZIw474A3yT_hZt1dkvVc",
  authDomain: "logo-sensei.firebaseapp.com",
  projectId: "logo-sensei",
  storageBucket: "logo-sensei.firebasestorage.app",
  messagingSenderId: "739658242332",
  appId: "1:739658242332:web:5861b2a2fb89c69ee242d9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);