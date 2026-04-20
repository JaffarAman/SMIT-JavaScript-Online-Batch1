  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";
import { getFirestore  , doc, setDoc , getDoc } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
// import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyAY94LglocjWHzNETEprs2eVbWtUBNU5Sk",
    authDomain: "smit-online-javascript.firebaseapp.com",
    projectId: "smit-online-javascript",
    storageBucket: "smit-online-javascript.firebasestorage.app",
    messagingSenderId: "947834875841",
    appId: "1:947834875841:web:20ec2e17cb509b3da60940"
  };




  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

  export {
    app,
    auth,
    createUserWithEmailAndPassword,
    db,
    doc, 
    setDoc,
    signInWithEmailAndPassword,
    getDoc
  }