import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;