import firebase from "firebase";

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjcw2Tm-f2leX0t6WvQwBadN3zveq6Ec8",
  authDomain: "voting-app-a76d9.firebaseapp.com",
  projectId: "voting-app-a76d9",
  storageBucket: "voting-app-a76d9.appspot.com",
  messagingSenderId: "56720466146",
  appId: "1:56720466146:web:860f51ea4a115855febebb",
};

// Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
