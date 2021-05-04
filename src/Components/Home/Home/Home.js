import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Headers/>
            <Services/>
            <FeaturedService/>
            <Testimonial/>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;