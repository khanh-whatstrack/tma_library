// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu7o67ke0kIcCFoqsqE2jjUxZ5oBiaCiY",
  authDomain: "signup-by.firebaseapp.com",
  projectId: "signup-by",
  storageBucket: "signup-by.appspot.com",
  messagingSenderId: "1016010530419",
  appId: "1:1016010530419:web:076535c81b4d9804a45406",
  measurementId: "G-XJJ9L93R1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, app };
