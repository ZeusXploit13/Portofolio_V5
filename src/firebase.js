import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIySwCcs4GKncvJNOgL0bPhYdcpjVgkXI",
  authDomain: "zeus-d7e4e.firebaseapp.com",
  projectId: "zeus-d7e4e",
  storageBucket: "zeus-d7e4e.firebasestorage.app",
  messagingSenderId: "567365873387",
  appId: "1:567365873387:web:80b92564eeb855358398ae",
  measurementId: "G-RWY24NR1X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
