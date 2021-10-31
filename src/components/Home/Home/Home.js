import React from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Hero from '../Hero/Hero';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Blogs></Blogs>
            <Offers></Offers>
            <Subscribe></Subscribe>
            <About></About>
        </div>
    );
};

export default Home;