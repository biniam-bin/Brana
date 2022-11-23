// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
 GoogleAuthProvider,
 getAuth,
 signInWithPopup,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 sendPasswordResetEmail,
 signOut,
} from "firebase/auth";

import {
 getFirestore,
 query,
 getDocs, 
 collection,
 where,
 addDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRgos-unslYyNH4TK4vxZFf4kJyij9wlQ",
    authDomain: "brana-84fa7.firebaseapp.com",
    projectId: "brana-84fa7",
    storageBucket: "brana-84fa7.appspot.com",
    messagingSenderId: "431745202577",
    appId: "1:431745202577:web:b3c8409b168f8018134230",
    measurementId: "G-5EZBMWTXSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);