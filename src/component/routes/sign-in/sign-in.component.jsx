import React from 'react';
import { signInWithGooglePopup, createUserDocumentationFromAuth } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentationFromAuth(user);
    }
    return (
        <div>SignIn
            <button onClick={logGoogleUser}>Sign In with popup</button>
        </div>
    )
}

export default SignIn