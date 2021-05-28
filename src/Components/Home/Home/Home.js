import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Headers from '../Headers/Headers';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Headers/>
            <Services/>
            <FeaturedService/>
            <Testimonial/>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer/>
        </div>
    );
};

export default Home;