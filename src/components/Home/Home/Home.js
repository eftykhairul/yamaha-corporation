import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import GetReview from '../Reviews/GetReview';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <GetReview></GetReview>
        </div>
    );
};

export default Home;