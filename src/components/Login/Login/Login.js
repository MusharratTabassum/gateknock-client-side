import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { handleGoogleSignIn, handleEmailChange, handlePasswordChange,
        error, handleUserLogin, handleResetPassword,
        loginProcess, email, password } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";

    const handleGoogleLoginProcess = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const handleLoginSubmit = e => {
        loginProcess(email, password, location, history);
        e.preventDefault();
    }


    return (
        <div>
            <div className='bg'>
                <form className='form-look ' onSubmit={handleLoginSubmit} >
                    <h1 className='mb-4' style={{ color: "white" }}>GateKnock</h1>
                    <h4 className='mb-4' style={{ color: "white" }}>Sign into your account</h4>
                    <input onBlur={handleEmailChange} className='input-box' type="email" placeholder="write your email" required />
                    <input onBlur={handlePasswordChange} className='input-box' placeholder="write your password" type="password" required />
                    <br />
                    <span className="text-red ms-1" style={{ color: "red" }}><small>{error}</small></span>
                    {/* <input type="submit" />*/}
                    <br />
                    <button type="submit" className="authenticate-btn">
                        Login
                    </button>
                    <br />
                    <h6 className='mt-2 mb-4' style={{ color: "white" }}>Don't have an account?<Link className='reset' to="/register">Register here</Link></h6>

                </form>
            </div>

        </div>

    );

};

export default Login;