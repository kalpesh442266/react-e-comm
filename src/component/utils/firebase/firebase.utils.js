import { initializeApp } from 'firebase/app'
import {
    getAuth, signInWithRedirect, signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAp4Qkl2m-64p3bAjig3IuBpQLv5RPAHkI",
    authDomain: "crwn-cloathing-33a83.firebaseapp.com",
    projectId: "crwn-cloathing-33a83",
    storageBucket: "crwn-cloathing-33a83.appspot.com",
    messagingSenderId: "997585913184",
    appId: "1:997585913184:web:16f4b0cc467ab2e7808a05"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup =()=>signInWithPopup(auth,provider);  

