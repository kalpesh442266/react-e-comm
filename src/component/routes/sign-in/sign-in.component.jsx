import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <div>SignIn
            <button onClick={logGoogleUser}>Sign In with popup</button>
        </div>
    )
}

export default SignIn