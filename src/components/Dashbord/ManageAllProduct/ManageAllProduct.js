import React, { useEffect, useState } from 'react';
import ShowAllProduct from './ShowAllProduct';

const ManageAllProduct = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/moreServices')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    return (
        <div className='add-service' id='addService'>
            <h1>Your Order</h1>
            <div className='service-container mt-3'>
            {
                services.map(service=> <ShowAllProduct
                    key={service._id}
                    service={service}
                ></ShowAllProduct>
                    
                    
                
                )
            }
            </div>
            
        </div>
    );
};

export default ManageAllProduct;