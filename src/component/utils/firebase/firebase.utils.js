import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import {
    getAuth, signInWithRedirect, signInWithPopup,
    GoogleAuthProvider,createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,

} from 'firebase/firestore'

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

export const db = getFirestore();
export const createUserDocumentationFromAuth= async (userAuth,additonalInfo={})=>{
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const{displayName,email} = userAuth;
        const createdAt = new Date();
        try{
             await setDoc(userDocRef,{displayName,email,createdAt,...additonalInfo})
        }catch(error){
            console.log('error creating the user',error)
        }
    }

    return userDocRef;
} 

export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
}

