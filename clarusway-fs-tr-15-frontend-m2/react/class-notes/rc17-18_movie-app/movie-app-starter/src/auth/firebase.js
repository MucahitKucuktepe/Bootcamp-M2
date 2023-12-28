import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBZ75HYTenMTuYTpblR_rTdbZG4vRd_oCA",
    authDomain: "movie-app-ad9a5.firebaseapp.com",
    projectId: "movie-app-ad9a5",
    storageBucket: "movie-app-ad9a5.appspot.com",
    messagingSenderId: "964635118269",
    appId: "1:964635118269:web:426d9b6e3705eb0f1f05d4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
