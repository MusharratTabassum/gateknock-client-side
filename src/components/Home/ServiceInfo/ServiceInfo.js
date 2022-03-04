import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AOS from 'aos';
import axios from 'axios';
import Pricing from '../Pricing/Pricing';
import "./ServiceInfo.css"


const ServiceInfo = () => {

    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    const { user } = useAuth();


    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServiceDetail(data));
    }, []);

    const chosenData = serviceDetail.find(item => item._id === serviceId);


    useEffect(() => {
        AOS.init(
            {

            }
        )
    }, [])


    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks! We will contact with you soon.');
                    console.log(res);
                    reset();

                }
            })
    }

    return (
        <div >
            <div className='container '>
                <div className='serviceDetail '>
                    <div className='row'>
                        <div className="col-12 col-lg-12" data-aos="flip-left" >
                            <img className='img-fluid mb-4' style={{ width: "350px" }} src={chosenData?.service_img} alt="" />
                        </div >
                        <div className="col-12 col-lg-12 notice text-start p-4" >
                            <h1 className=" mb-3">{chosenData?.service_name} Delivery</h1>
                            <p className='black'>{chosenData?.service_des}</p>
                        </div>
                        <Pricing></Pricing>
                    </div>
                </div>
            </div>
            <h1 className="mt-4" >Want to take the service?</h1>

            <div className="ms-2 me-3 mb-5">
                <div className=' mt-5' >
                    <div className=' row mt-5'>
                        <div className="form-side col-lg-12 p-4 me-0 " >
                            <div className='booking-detail'>
                                <div className="add-service">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                                        <input type="text" {...register("email", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.email} />
                                        <input type="text" {...register("status", { required: true })} className='input-boxes' defaultValue="pending" />
                                        <input {...register("service_name", { required: true, maxLength: 20 })} placeholder="service name" />
                                        <input type="text" {...register("picking_address")} placeholder="picking address" />
                                        <input type="text" {...register("droping_address")} placeholder="droping address" />
                                        <input type="date" {...register("Picking_Date")
                                        } placeholder="Date" />
                                        <input type="time" {...register("Time")} placeholder="Time to pick" />
                                        <input type="date" {...register("Dropping_Date")} placeholder="Date" />
                                        <input className='add-btn' type="submit" />
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceInfo;