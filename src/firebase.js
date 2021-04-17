import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASHIiSm2GoffTSOYxhsthvJEx08oSo5EU",
  authDomain: "slack-clone-6285d.firebaseapp.com",
  projectId: "slack-clone-6285d",
  storageBucket: "slack-clone-6285d.appspot.com",
  messagingSenderId: "268520213400",
  appId: "1:268520213400:web:7a6cbb5cc6e0d560fa79ed",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
