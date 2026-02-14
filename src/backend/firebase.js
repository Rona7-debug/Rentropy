import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwg9WsHZMjnbqNJteOGYHnPy1MysfM6_g",
  authDomain: "rentrophy.firebaseapp.com",
  projectId: "rentrophy",
  storageBucket: "rentrophy.firebasestorage.app",
  messagingSenderId: "714503941875",
  appId: "1:714503941875:web:4886b83132606aedb11186"
};

// initialize the fb
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)