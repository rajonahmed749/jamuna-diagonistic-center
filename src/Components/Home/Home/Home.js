import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Headers/>
            <Services/>
            <FeaturedService/>
            <Testimonial/>
        </div>
    );
};

export default Home;