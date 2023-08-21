import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpx1DDgvojE1mEpItlmYgSlv-Tfzznxq8",
    authDomain: "allservicesprovider-24.firebaseapp.com",
    projectId: "allservicesprovider-24",
    storageBucket: "allservicesprovider-24.appspot.com",
    messagingSenderId: "496818695747",
    appId: "1:496818695747:web:509503d9923a7c25d86ef6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore };

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        window.location.href = "/dashboard";
    })
    .catch((error) => {
        console.log(error);
    });
};