import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDk8_Udz2jAvy9BnDPcUbl81WP-YQ0Xu1s",
  authDomain: "clone-e7fdd.firebaseapp.com",
  projectId: "clone-e7fdd",
  storageBucket: "clone-e7fdd.appspot.com",
  messagingSenderId: "812301845499",
  appId: "1:812301845499:web:2020fc57d0336cde70015e",
  measurementId: "G-665EK2XLML",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
