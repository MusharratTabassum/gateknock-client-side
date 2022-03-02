import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-area mb-5'>
            <div className='bg-image banner-section banner-bg-one'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-lg-5'>
                            <div className='banner-content-wrapper'>
                                <div className="banner-content text-start pt-5">
                                    <h1>GateKnock Delivery Service</h1>
                                    <h2>On Demand Delivery
                                        at Your Doorstep</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;