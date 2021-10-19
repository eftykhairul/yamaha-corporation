import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {name,price,doctor,images,description,id} = service;
    return (
        <div className='service pb-3'>
            <img className='images' src={images} alt='' />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <h4>Doctor Name: {doctor} </h4>
            <p className='px-3 py-2'>About: {description?.length>30?description.slice(0,100)+"...":description}</p>
            <Link to={`/booking/${id}`}>
                <button className='btn btn-warning'>Book {name} </button>
            </Link>
        </div>
    );
};

export default Service;