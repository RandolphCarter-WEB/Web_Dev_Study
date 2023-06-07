import React, { useEffect } from 'react';
import '../../App.css';

const SignUp = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h1 className="sign-up">SIGN UP</h1>
        </div>

    );

}

export default SignUp;