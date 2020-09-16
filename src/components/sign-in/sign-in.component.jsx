import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

function SignIn() {
    const [state, setState] = useState(
        {
            email: '',
            password: ''
        }
    );
    
    console.log(state.email);
    console.log(state.password);

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
        <h3>Test</h3>
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
        </form>
    </div>
    )
}

export default SignIn;