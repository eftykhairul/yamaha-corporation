
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const{serviceId} = useParams();
    const [dataServices,setdataServices] = useState([]);
    const [singleServices,setSingleServices]=useState({})
    useEffect(()=>{
        fetch('/service-tools.json')
        .then(res => res.json())
        .then(data => setdataServices(data))
    },[])
    useEffect( () => {
        const foundData=  dataServices.find(singleService => singleService.id === serviceId)
        setSingleServices(foundData)
    },[dataServices])
    return (
        <div className='container box my-3'>
            <img className='images' src={singleServices?.images} alt=''/>
            <h1>Name: {singleServices?.name}</h1>
            <h3>Doctor: {singleServices?.doctor}</h3>
            <h5>Email: {singleServices?.email}</h5>
            <h5>Phone: {singleServices?.doctorPhone}</h5>
            <p>Description of {singleServices?.name}: {singleServices?.description}</p>
            
        </div>
    );
};

export default Booking;