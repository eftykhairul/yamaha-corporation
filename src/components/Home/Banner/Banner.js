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
        src={'https://cdnb.artstation.com/p/assets/images/images/016/734/107/large/giridhar-naani-e29f8166329333-5b1266971fcf8.jpg?1553256310'}
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
        src={'http://4.bp.blogspot.com/-vINkA36c4Vw/VQVANbRztpI/AAAAAAAAKbo/TcWLnb_3KmI/s1600/yamaha%2Btwo%2Bwhellers%2Bprice%2Bin%2Bnepal.jpg'}
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
        src={'https://www.india.com/wp-content/uploads/2017/01/Yamaha-Upcoming-Launches-FZ-1-750x380.jpg'}
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