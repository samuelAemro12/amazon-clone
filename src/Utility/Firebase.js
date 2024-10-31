import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjko73W3HUHfQddfA13VelkYsxCl4EWwE",
  authDomain: "clone-31206.firebaseapp.com",
  projectId: "clone-31206",
  storageBucket: "clone-31206.firebasestorage.app",
  messagingSenderId: "455326339647",
  appId: "1:455326339647:web:10726185abff9e8b6dde8a"
};

const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(App);
export const db = app.firestore();