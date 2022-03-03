import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, service_name, service_img, service_des } = service;
    return (
        <div>
            <div className="col" >
                <div >
                    <div className="card shadow-lg p-3 ">
                        <img src={service_img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title fw-bold">{service_name}</h5>
                            <p className="card-text">{service_des.slice(0, 70)}...</p>
                        </div>

                        <div class="card-footer ">
                            <Link to={`/serviceDetail/${_id}`}>
                                <button>Details</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;