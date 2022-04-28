import React from 'react';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import { signInWithGooglePopup, createUserDocumentationFromAuth } from '../../utils/firebase/firebase.utils';


function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentationFromAuth(user);
    }
    return (
        <div>SignIn
            <button onClick={logGoogleUser} >Sign In with popup</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn