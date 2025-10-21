import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CONST SHOULD BE EMPTY IN REPO !!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const firebaseConfig = {
  apiKey: "AIzaSyAIgE1IbqvDpXT9kf8HrkciBqOQhzT_FE0",
  authDomain: "csleague-app-dev.firebaseapp.com",
  projectId: "csleague-app-dev",
  storageBucket: "csleague-app-dev.firebasestorage.app",
  messagingSenderId: "887024397543",
  appId: "1:887024397543:web:c3cd69f98666595c58c642",
  measurementId: "G-FP5ME1QZCC"
};

export const EMAIL_COND_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const USERS_TYPS = {
    ADM: {value: 'Administrador', code: 'ADM'}, 
    CLI: {value: 'Equipo', code: 'EQU'}, 
    ABO: {value: 'Jugador', code: 'JUG'}, 
    ALL: {value: 'Publico', code: 'ALL'}
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDatabase = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);