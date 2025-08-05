// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJr2-JYqFxd8adfZySqA0M-2yFAwEpGYg",
  authDomain: "notion-clone-36cc9.firebaseapp.com",
  projectId: "notion-clone-36cc9",
  storageBucket: "notion-clone-36cc9.firebasestorage.app",
  messagingSenderId: "53791501255",
  appId: "1:53791501255:web:ff1793c37d72e278bdc7e2",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
