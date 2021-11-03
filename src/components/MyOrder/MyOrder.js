import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const MyOrder = () => {
    const{serviceId} = useParams();
    const [dataServices,setdataServices] = useState([]);
    const [singleServices,setSingleServices]=useState({});
    
    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setdataServices(data))
    },[])
    useEffect( () => {
        const foundData=  dataServices.find(singleService => singleService._id === serviceId)
        setSingleServices(foundData)
    },[dataServices])
    
    return (
        <div className='add-service' id='addService'>
            <h1>Hello</h1>
            <img className='images' src={singleServices?.images} alt=''/>
            <h1>Name: {singleServices?.name}</h1>
            <p>Description of {singleServices?.name}: {singleServices?.description}</p>
            <h5>Price: {singleServices?.price}</h5>
        </div>
    );
};

export default MyOrder;
