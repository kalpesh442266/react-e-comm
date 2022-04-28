import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import { createAuthUserWithEmailAndPassword, createUserDocumentationFromAuth } from '../utils/firebase/firebase.utils'
import './sign-up-form.styles.scss'

import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
function SignUpForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        console.log(formFields);
    }
    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentationFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Dont Have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onFormSubmit}>
                <FormInput label="Display Name" required onChange={handleChange} type="text" name='displayName' value={displayName} />

                <FormInput label="Email" required onChange={handleChange} type="email" name='email' value={email} />

                <FormInput label="Password" required onChange={handleChange} type="password" name='password' value={password} />

                <FormInput label="Confirm Password" required onChange={handleChange} type="password" name='confirmPassword' value={confirmPassword} />


               <Button type='submit' buttonType='inverted '>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm