// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0avce-SKG0iCFjp6OUEwnngk69Ifcr5I",
  authDomain: "doctor-f8ea2.firebaseapp.com",
  projectId: "doctor-f8ea2",
  storageBucket: "doctor-f8ea2.appspot.com",
  messagingSenderId: "44802194863",
  appId: "1:44802194863:web:25d6f2b4ccfdcdb014035a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app