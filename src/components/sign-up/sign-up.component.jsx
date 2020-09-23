import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import fire from '../../firebase/firebase.utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    const handleSubmit = async event => {
        event.preventDefault();
        console.log('works');
    
        try {
          const { user } = await fire.auth().createUserWithEmailAndPassword(
            email,
            password
          );
    
          await createUserProfileDocument(user, { displayName });
    
          setDisplayName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')

        } catch (error) {
         console.log(error);
        }
      };

    
    return (
        <div className='sign-up'>
            <h2 className="title"> I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value) }
                    label='Name'
                    required
                />
                 <FormInput
                    type='text'
                    name='email'
                    value={email}
                    label='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                    <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </form>
            <CustomButton onClick={handleSubmit} type='submit'>Sign Up</CustomButton>
        </div>
    )
}

export default SignUp;
