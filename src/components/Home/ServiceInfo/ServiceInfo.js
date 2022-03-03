import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AOS from 'aos';
import axios from 'axios';


const ServiceInfo = () => {

    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    const { user } = useAuth();


    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch("https://murmuring-beyond-96223.herokuapp.com/services")
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
        axios.post('https://murmuring-beyond-96223.herokuapp.com/bookings', data)
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
                        <div className="col-12 col-lg-6" data-aos="flip-left" >
                            <img className='img-fluid img-size  mb-4' src={chosenData?.image} alt="" />
                        </div >
                        <div className="col-12 col-lg-6 notice text-start p-4" data-aos="flip-right">
                            <h2 className=" mb-3">{chosenData?.title}</h2>
                            <p className='white'>{chosenData?.short_description}</p>
                            <h6 className='mt-4 white mb-2'>Duration : {chosenData?.duration}</h6>
                            <h6 className='white'>{chosenData?.price}tk/Person</h6>
                            <p className='white'>Price : {chosenData?.package_brief}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1>What's Next??</h1>
            {/**Service && Booking part */}
            <div className="ms-2 me-3 mb-5">
                <div className=' mt-5' >
                    <div className=' row mt-5'>
                        <div className='notice col-lg-6 text-start' >
                            <h2 className="mb-5">Notice</h2>
                            <p className="mt-5"># We have NO HIDDEN COST / CHARGE</p>
                            <p># All price subject to availability</p>
                            <p># All package for 2 person minimum</p>
                            <p># Any date available. (Please mention journey dates to check)</p>
                            <p># Price may increase during the blackout period ( Religious or national holidays, conference or fairs, world events )</p>
                            <p># Custom package available </p>
                        </div>
                        <div className="form-side col-lg-6 p-4 me-0 " >

                            <div className='booking-detail'>
                                <h2 className="mb-3">Book The Tour</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input type="text"  {...register("title", { required: true })} placeholder="Booked Package" defaultValue={chosenData?.title} />
                                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
                                    <input type="email" {...register("email", { required: true })} placeholder="Email" defaultValue={user.email} />
                                    <input type="text" {...register("status", { required: true })} defaultValue="pending" />
                                    <input type="number" {...register("phone", { required: true })} placeholder="01*******" />
                                    <input type="number" {...register("person-no", { required: true })} placeholder="No. of person to go" />
                                    <input type="text" {...register("address", { required: true })} placeholder="Address" />
                                    <input type="date" {...register("Date")} placeholder="Date" />
                                    <input className='booking-btn' type="submit" value="Book" />
                                </form></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServiceInfo;