// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT6OZkkYHXSmOumSgE8zyom3gpba4u--o",
    authDomain: "unexpected-news.firebaseapp.com",
    projectId: "unexpected-news",
    storageBucket: "unexpected-news.appspot.com",
    messagingSenderId: "931172298054",
    appId: "1:931172298054:web:834a0e5ceccc32ff114947"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;