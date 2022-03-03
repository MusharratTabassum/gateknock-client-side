import React, { useEffect } from 'react';
import AOS from 'aos'
import img from "./faq.jpg"

const Faq = () => {
    useEffect(() => {
        AOS.init(
            {

            }
        )
    }, [])

    return (
        <div>
            <div>
                <div className="container">
                    <div className="faq">
                        <h1 className="text-center fw-bold my-5 py-5 service-title">Frequently Asked <span className="yellow">
                            Questions</span>
                        </h1>
                        <div className="row py-2">

                            <div className="col-md-6 d-flex align-items-center" data-aos="fade-down"
                                data-aos-duration="1000">
                                <div>
                                    <div className="accordion " id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item mb-3  ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button fw-bold text-dark bg-transparent "
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne ">

                                                    There was a delay in my delivery/my delivery had a routing issue.What should i do?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne"
                                                className="accordion-collapse collapse show"
                                                labelled="panelsStayOpen-headingOne">
                                                <div className="accordion-body  text-muted text-start">
                                                    For such cases, send an email at ecomsupport@gateknock.com with the following a) Customer details b) Consignment ID Once the steps have been followed, our support team will take actions accordingly.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3 ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                    My product was damaged/lost during the delivery.What should i do?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingTwo">
                                                <div className="accordion-body  text-muted text-start">
                                                    Please send your customer details along with a picture of the damaged product if possible at ecomsupport@gateknock.com We will then look into the matter to investigate and get back to you within the next 48 hours. In case the parcel is damaged due to poor packaging or for not having precautionary messages on the packaging, Pathao will not be held accountable. We also encourage the customers to check their products at the time of delivery to avoid all sorts of confusion.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                    How can i make a complaint about my delivery agent or some issue if i faced for my delivery?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingThree">
                                                <div className="accordion-body  text-muted text-start">
                                                    Please send your customer details along with consignment ID with necessary attachments if needed at ecomsupport@gateknock.com We will then look into the matter to investigate and get back to you within the next 48 hours. Corrective measures will be taken at the completion of the investigation.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseFour">
                                                    I need some information on your service.How can  i contact you?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingFour">
                                                <div className="accordion-body  text-muted text-start">
                                                    In order to know more about our courier coverage areas, delivery time charges, payment method and such, call us at 09610003030 or email at ecomsupport@gateknock.com We will get back to you within 24 hours.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up"
                                data-aos-duration="1000">
                                <img className="img-fluid h-100" src={img} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div >

        </div>
    );
};

export default Faq;