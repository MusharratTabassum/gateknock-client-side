import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Pricing from '../Pricing/Pricing';
import ReliableBanner from '../ReliableBanner/ReliableBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ReliableBanner></ReliableBanner>
            <Pricing></Pricing>
            <Faq></Faq>

        </div>
    );
};

export default Home;