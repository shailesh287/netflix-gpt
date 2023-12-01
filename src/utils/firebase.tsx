// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASdtNEP6Zj7qfSOjQJIKggtAMmVuv704w",
  authDomain: "netflixgpt-872c1.firebaseapp.com",
  projectId: "netflixgpt-872c1",
  storageBucket: "netflixgpt-872c1.appspot.com",
  messagingSenderId: "902558507463",
  appId: "1:902558507463:web:9ae139bd24b3e9b846f9e2",
  measurementId: "G-784H5SJ6KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();