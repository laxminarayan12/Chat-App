import firebase from "firebase/app";
import "firebase/auth";
 
export const  auth = firebase.initializeApp({
    apiKey: "API_ID",
    authDomain: "chat-app-3162a.firebaseapp.com",
    projectId: "chat-app-3162a",
    storageBucket: "chat-app-3162a.appspot.com",
    messagingSenderId: "521454226138",
    appId: "APP_ID"
  }).auth ();
