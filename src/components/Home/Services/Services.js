import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/moreServices')
        .then(res=>res.json())
        .then(data=>setServices(data.slice(0,6)))
    },[])
    
    
    return (
        <div id='services'>
            <h1 className='text-info my-5 middle'>Our Products</h1>
            <div className='service-container mt-3'>
            {
                services.map(service=> <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
            
    );
};

export default Services;