import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgd-t7vH7b6IEbc7pRWVsF_hBcLb-crU",
  authDomain: "manilazooproject.firebaseapp.com",
  projectId: "manilazooproject",
  storageBucket: "manilazooproject.appspot.com",
  messagingSenderId: "366656760895",
  appId: "1:366656760895:web:0b8b5292da757b2f2f1c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);