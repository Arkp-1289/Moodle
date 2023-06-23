// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHyXffTwoDcduISzNuguiod3pVL3f40c4",
    authDomain: "moodle-ec86c.firebaseapp.com",
    projectId: "moodle-ec86c",
    storageBucket: "moodle-ec86c.appspot.com",
    messagingSenderId: "562558319831",
    appId: "1:562558319831:web:dfdffb32bc92d5137d8492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
