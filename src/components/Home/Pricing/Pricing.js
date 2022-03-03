import React from 'react';
import "./Pricing.css"

const Pricing = () => {
    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <div className="row">
                <div class="col-12">
                    <div class="section-title text-start">
                        <h2 class="mb50">Pricing Plan</h2>
                        <p class="mb20i">Select Service Type</p>
                    </div>
                </div>
                <div className='price-table table-responsive-sm'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Delivery Time</th>
                                <th scope="col">Upto 500 gm</th>
                                <th scope="col">500 gm to 1 Kilo</th>
                                <th scope="col">1 Kilo to 2 Kilo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24 Hours
                                </td><td>BDT 60</td>
                                <td>BDT 70</td>
                                <td>BDT 90</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="price-condition text-start">
                    <ul>
                        <li>1% COD charge will be applicable</li>
                        <li>This price/plan is exclusive of any VAT/TAX.</li>
                        <li>For weight more than 2KG, additional 15TK/Per KG (SAME CITY) will be applicable.</li>
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default Pricing;