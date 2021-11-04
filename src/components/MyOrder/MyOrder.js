import React, { useEffect, useState } from 'react';
import ShowOrder from './ShowOrder';


const MyOrder = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    
    return (
        <div className='add-service' id='addService'>
            <h1>Your Order</h1>
            <div className='service-container mt-3'>
            {
                services.map(service=> <ShowOrder
                    key={service._id}
                    service={service}
                ></ShowOrder>
                )
            }
            </div>
            
        </div>
    );
};

export default MyOrder;
