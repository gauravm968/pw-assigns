import React from 'react';

function Login({ toggleSignUp }) {
    return (
        <div className="login">
             <img src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_1280.png" alt="logo" />
            <div className="input-boxes">
                <input type="text" placeholder="Phone number, username, Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <div className='info'>
                    Don't have an account?{' '}
                    <span>
                        <a href="#" onClick={toggleSignUp}>
                            Sign Up
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;