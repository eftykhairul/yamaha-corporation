import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'



const Banner = () => {
    return (
        <>
            <Carousel>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={'https://www.albawaba.com/sites/default/files/im_new/dima/Tourism_shutterstock_June9.jpg?width=1200&enable=upscale'}
        alt="First slide"
    />
    <Carousel.Caption>
        <h3 className='text-dark'>Travelling is fun</h3>
        <p className='text-dark'>Travelling more and you will get peace</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={'https://leverageedu.com/blog/wp-content/uploads/2019/10/Career-in-Travel-and-Tourism.jpg'}
        alt="Second slide"
    />

    <Carousel.Caption>
        <h3 className='text-dark'>We support many foreign services</h3>
        <p className='text-dark'>Just knock us for your travel and we will help us</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 img"
        src={'https://www.sandipuniversity.edu.in/blog/wp-content/uploads/2020/02/bba-travel-tourism-management-700x400.jpg'}
        alt="Third slide"
    />

    <Carousel.Caption>
        <h3 className='text-dark'>Wait! We will help you in your travel</h3>
        <p className='text-dark'>Just know more about our service, Take a visit at our website</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;