import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Nurses from '../Nurses/Nurses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Nurses></Nurses>
        </div>
    );
};

export default Home;