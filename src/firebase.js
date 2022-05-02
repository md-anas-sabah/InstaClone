import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC01T81nAIX2rPskHtxBltRKFrGUj6zyD8",
  authDomain: "instagram-clone-cd415.firebaseapp.com",
  projectId: "instagram-clone-cd415",
  storageBucket: "instagram-clone-cd415.appspot.com",
  messagingSenderId: "277344291723",
  appId: "1:277344291723:web:287bb808f3ccbe28563d8e",
  measurementId: "G-EXZFL96YED",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
