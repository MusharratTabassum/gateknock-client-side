import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import img from "./contact.jpg"



const Contact = () => {

    const LocationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const EmailIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    const PhoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_joo9mlo', 'template_a345zsx', form.current, 'user_EGHEltMOfuzXN4VjkwrHh')
            .then((result) => {
                alert("Message sent successfully!")
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    };
    useEffect(() => {
        AOS.init(
            {
                anchorPlacement: 'top-bottom'
            }
        )
    }, [])


    return (
        <div>
            <div className=''>
                <div className='pt-4 gx-0 d-flex align-items-center justify-content-center'
                    style={{ background: `radial-gradient(transparent, black), url('${img}`, backgroundSize: 'cover', height: "500px", backgroundBlendMode: 'saturation' }}>
                    <div className='w-50'>
                        <h1 className='service-title'>Home | Contact Us</h1>
                        <h6 className='m-4'>Incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.</h6>
                    </div>

                </div>
                <div className='container contact-info-area'>
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col ">
                            <div className='contact-info'>
                                <div class="card h-100 first-height">
                                    <div className='coffee'>
                                        {LocationIcon}
                                    </div>
                                    <div class="card-body">
                                        <h3>Location</h3>
                                        <p>950 St Johns Pl Brooklyn, NY,
                                            United States</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col">
                            <div className='contact-info'>
                                <div class="card h-100">
                                    <div className='coffee'>
                                        {EmailIcon}
                                    </div>
                                    <div class="card-body">
                                        <h3>Email Address</h3>
                                        <p>hello@wecare.com</p>
                                        <p>info@wecare.com</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="col">
                            <div className='contact-info'>
                                <div class="card h-100">
                                    <div className='coffee'>
                                        {PhoneIcon}
                                    </div>
                                    <div class="card-body">
                                        <h3>Phone Number</h3>
                                        <p>+8256-569-888</p>
                                        <p>+8256-569-887</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='container'>
                    <div className="row gx-0 ">
                        <div className='col-lg-12 p-5 contact contact-info ' data-aos="fade-down"
                            data-aos-duration="1800">
                            <form ref={form} onSubmit={sendEmail} className='form-styles mt-4' >
                                <h1 className='red'>Send Message</h1>
                                <input className='text-input-style' placeholder="your name" type="text" name="client_name" required />
                                <input className='text-input-style' type="email" placeholder="your email" name="email" required />
                                <textarea className='text-input-style' placeholder="messages" type="text" name="message" required />
                                <input className="add-btn" type="submit" value="Send" />

                            </form>
                        </div>
                    </div>


                </div>


            </div >
        </div>
    );
};

export default Contact;