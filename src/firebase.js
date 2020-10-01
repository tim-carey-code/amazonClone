import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBkq7jLTgfO2KTRxqJ9hmU3b3IpgU0wWQo",
  authDomain: "challenge-e302f.firebaseapp.com",
  databaseURL: "https://challenge-e302f.firebaseio.com",
  projectId: "challenge-e302f",
  storageBucket: "challenge-e302f.appspot.com",
  messagingSenderId: "315585437032",
  appId: "1:315585437032:web:237bf95ad283f8535bcadd",
  measurementId: "G-L7VGXL4NCE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
