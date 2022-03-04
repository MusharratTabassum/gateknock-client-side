import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Registration = () => {
    const { name, handleNameChange, handleEmailChange, handlePasswordChange, error, handleUserRegistration, handleResetPassword } = useAuth();
    return (
        <div>
            <div className='bg'>

                <form className='form-look ' onSubmit={handleUserRegistration} >
                    <h1 className='mb-4'>GateKnock</h1>
                    <h4 className='mb-4' style={{ color: "white" }}>Registration Here</h4>
                    <input onBlur={handleNameChange} className='input-box' type="text" placeholder="write your name" required />
                    <input onBlur={handleEmailChange} className='input-box' type="email" placeholder="write your email" required />
                    <input onBlur={handlePasswordChange} className='input-box' placeholder="write your password" type="password" required />
                    <span className="text-red"><small>{error}</small></span>
                    {/* <input type="submit" />*/}
                    <button type="submit" className="authenticate-btn mt-3">
                        Register
                    </button>
                    <br />
                    <h6 className='color mt-2 mb-4' style={{ color: "white" }}>Already have an account?<Link className='reset' to="/login">Login here</Link></h6>

                </form>




            </div>


        </div>
    );
};

export default Registration;