import React, { useState } from 'react';
import Login from '../Login/Login'; // Import the Login component

function SignUp() {
    const [isSignedUp, setIsSignedUp] = useState(true);

    const toggleSignUp = () => {
        setIsSignedUp(!isSignedUp);
    };

    return (
        <div className='signup-container'>
            <div className="signup">
                {isSignedUp ? (
                    <>
                        <img src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_1280.png" alt="logo" />
                        <div className="input-boxes">
                            <input type="text" placeholder='Mobile Number or Email' />
                            <input type="text" placeholder='Full Name' />
                            <input type="text" placeholder='Username' />
                            <input type="text" placeholder='Password' />
                            <button>Sign up</button>
                            <div className='info'>
                                Have an account?{' '}
                                <span>
                                    <a href="#" onClick={toggleSignUp}>
                                        Log In
                                    </a>
                                </span>
                            </div>
                        </div>
                    </>
                ) : (
                    <Login toggleSignUp={toggleSignUp} />
                )}
            </div>
        </div>
    );
}

export default SignUp;