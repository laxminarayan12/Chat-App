import firebase from "firebase/app";
import "firebase/auth";
 
export const  auth = firebase.initializeApp({
    apiKey: "AIzaSyAxy-dBW8EI_CxDkNP-sZh-x6fnsPN72og",
    authDomain: "chat-app-3162a.firebaseapp.com",
    projectId: "chat-app-3162a",
    storageBucket: "chat-app-3162a.appspot.com",
    messagingSenderId: "521454226138",
    appId: "1:521454226138:web:2aead01cc50c424198b3e3"
  }).auth ();