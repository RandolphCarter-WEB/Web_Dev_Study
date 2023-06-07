import React from 'react'
import './Footer.css';
import Button from './Button';

const SignUpForm = () => {
    return (
        <div className='input-areas'>
            <form>
                <input
                    className='footer-input'
                    name='email'
                    type='email'
                    placeholder='Email'
                />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
    );
}

export default SignUpForm;