// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCvotM9vA-xgQq59RGQlhicFbJI9vXLlcM",
	authDomain: "clone-54cab.firebaseapp.com",
	projectId: "clone-54cab",
	storageBucket: "clone-54cab.appspot.com",
	messagingSenderId: "500540863946",
	appId: "1:500540863946:web:f48a53eae5ef1defb38b33",
	measurementId: "G-N2YN1TM0QT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
