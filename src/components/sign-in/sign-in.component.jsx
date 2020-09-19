import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

function SignIn() {
    const [state, setState] = useState(
        {
            email: '',
            password: ''
        }
    );
    

    const handleSubmit = e => {
        e.preventDefault();

        setState({ email: '', password: ''});
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setState({ [name]: value });
      };

    return (
        <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
        <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={state.email}
            label='Email'
            required
        />
        <FormInput
            name='password'
            type='password'
            value={state.password}
            handleChange={handleChange}
            label='Password'
            required
        />
        <CustomButton type="Submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
        </form>
    </div>
    )
}

export default SignIn;