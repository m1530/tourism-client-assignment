import React from 'react';
import Blogs from '../Blogs/Blogs';
import Hero from '../Hero/Hero';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Blogs></Blogs>
            <Offers></Offers>
        </div>
    );
};

export default Home;