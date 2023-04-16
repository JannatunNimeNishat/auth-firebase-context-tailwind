// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4sus2QyG46IlVFKr5-uq7kiMOVOj1ci0",
  authDomain: "auto-firebase-context-tailwind.firebaseapp.com",
  projectId: "auto-firebase-context-tailwind",
  storageBucket: "auto-firebase-context-tailwind.appspot.com",
  messagingSenderId: "5670436153",
  appId: "1:5670436153:web:e1aa220a4f154e73633ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;