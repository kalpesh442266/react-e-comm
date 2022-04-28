import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentationFromAuth, signInUserWithEmailAndPasssword, signInWithGooglePopup } from '../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'

import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
}
function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const SignInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        createUserDocumentationFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInUserWithEmailAndPasssword(email, password)
            console.log(response);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Incorrect Password for email")
            }
            if (error.code === "auth/user-not-found") {
                alert('No user associated with this email')
            }
            console.log(error);
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already Have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onFormSubmit}>

                <FormInput label="Email" required onChange={handleChange} type="email" name='email' value={email} />

                <FormInput label="Password" required onChange={handleChange} type="password" name='password' value={password} />
                <div className='sign-in-form-buttons'>
                    <Button type='submit'  buttonType='inverted'  >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={SignInWithGoogle}>Sign In With Google</Button>
                </div>


            </form>
        </div>
    )
}

export default SignInForm