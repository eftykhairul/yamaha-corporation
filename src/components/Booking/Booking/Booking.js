
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'

const Booking = () => {
    const{serviceId} = useParams();
    const [dataServices,setdataServices] = useState([]);
    const [singleServices,setSingleServices]=useState({});
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setdataServices(data))
    },[])
    useEffect( () => {
        const foundData=  dataServices.find(singleService => singleService._id === serviceId)
        setSingleServices(foundData)
    },[dataServices])
    
    return (
        <div>
            <div className='container box my-3'>
                <img className='images' src={singleServices?.images} alt=''/>
                <h1>Name: {singleServices?.name}</h1>
                <p>Description of {singleServices?.name}: {singleServices?.description}</p>
                <h5>Price: {singleServices?.price}</h5>
                {/* <button  className='btn btn-warning'>Book {singleServices?.name} Trip </button> */}
                <Link to={'/myOrder'}>
                    <button className='btn btn-warning'>Book {singleServices?.name} Trip  </button>
                </Link>
            </div>
        </div>
    );
};

export default Booking;