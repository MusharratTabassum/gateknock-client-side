import React from 'react';
import img from "./reliable.webp";
import "./ReliableBanner.css"


const ReliableBanner = () => {
    return (
        <div>
            <div className="container">
                <div className="pt-4">
                    <div className="row py-2">
                        <div className="col-md-6 d-flex align-items-center" data-aos="fade-down"
                            data-aos-duration="1000">
                            <div>
                                <img className="img-fluid " style={{ width: "100%" }} src={img} alt="" />

                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className='relay text-start'>
                                <h1 style={{ marginBottom: "60px", marginTop: "80px" }}>Reliability is Our First Priority</h1>
                                <p><span style={{ fontWeight: "400" }}>
                                    We offer the lowest price with the highest value through our innovative logistics design. We deliver your courier at the right location at the right time, currently in 50+ districts throughout the country.


                                </span> </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReliableBanner;