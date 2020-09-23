import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import fire from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            await fire.auth().signInWithEmailAndPassword(email, password);

            setEmail('')
            setPassword('')
            console.log("You have been signed in  ");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
        <FormInput
            name='email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label='Email'
            required
        />
        <FormInput
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label='Password'
            required
        />
        <div className='button'>
            <CustomButton type="Submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
        </div>
        </form>
    </div>
    )
}

export default SignIn;