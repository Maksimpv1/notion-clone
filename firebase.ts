// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApE_zUS6aEgqVPUFQrJwoIuboWv8LUNIs",
  authDomain: "notion-clone-87a7a.firebaseapp.com",
  projectId: "notion-clone-87a7a",
  storageBucket: "notion-clone-87a7a.firebasestorage.app",
  messagingSenderId: "474081112520",
  appId: "1:474081112520:web:26b2601baddad1264490fd"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app)

export { db  }