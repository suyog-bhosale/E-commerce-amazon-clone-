import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhud-Wot_3Q6eoVM2Ros4-58kIPGKcI-I",
  authDomain: "clone-74eab.firebaseapp.com",
  databaseURL: "https://clone-74eab.firebaseio.com",
  projectId: "clone-74eab",
  storageBucket: "clone-74eab.appspot.com",
  messagingSenderId: "635745969593",
  appId: "1:635745969593:web:6691c6f038adcc165f8268",
  measurementId: "G-TX22NX1TEJ",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
