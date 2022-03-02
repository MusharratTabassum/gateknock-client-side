import React from 'react';
import { Link } from 'react-router-dom';
import image from "./not fount.png"

const NotFound = () => {
    return (
        <div className='mt-4'>
            <h1>We Lost You!</h1>
            <h6>The page you are looking for is not here.<Link to='/home' className='red'>Go To Home Page</Link>  </h6>
            <img className='pt-5' src={image} alt="" />

        </div>
    );
};

export default NotFound;