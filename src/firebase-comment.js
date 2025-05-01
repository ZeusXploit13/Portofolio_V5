import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIySwCcs4GKncvJNOgL0bPhYdcpjVgkXI",
  authDomain: "zeus-d7e4e.firebaseapp.com",
  projectId: "zeus-d7e4e",
  storageBucket: "zeus-d7e4e.firebasestorage.app",
  messagingSenderId: "567365873387",
  appId: "1:567365873387:web:026a2a4c8f4cc7d78398ae",
  measurementId: "G-1SZLJZ90RP"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
