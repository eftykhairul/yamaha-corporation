import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import first from '../../../images/banner/martha-dominguez-de-gouveia-k-NnVZ-z26w-unsplash.jpg';
import second from '../../../images/banner/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg';
import third from '../../../images/banner/national-cancer-institute-DK--4VWK1tw-unsplash.jpg';


const Banner = () => {
    return (
        <>
            <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={first}
        alt="First slide"
    />
    <Carousel.Caption>
        <h3 className='text-dark'>Bed of Our Hospital</h3>
        <p className='text-dark'>Well Decorated Bed feels like Home Environment</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={second}
        alt="Second slide"
    />

    <Carousel.Caption>
        <h3 className='text-dark'>View of Our Hospital</h3>
        <p className='text-dark'>A Korean based Internation Hospital in your door.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={third}
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3 className='text-dark'>Dr. Mahadi Karim taking with a patient</h3>
        <p className='text-dark'>Dr. karim is well known for heart attack specialist and a patient friendly doctor whos has a vast knowledge in heart dieseas</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;