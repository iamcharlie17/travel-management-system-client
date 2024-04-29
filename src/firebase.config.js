// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqAgKSKL3_dl_EhO0Kt1RIJq4fMaml3yk",
  authDomain: "travel-management-system-207f5.firebaseapp.com",
  projectId: "travel-management-system-207f5",
  storageBucket: "travel-management-system-207f5.appspot.com",
  messagingSenderId: "227221946649",
  appId: "1:227221946649:web:0680f5437f91d96aa40588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
