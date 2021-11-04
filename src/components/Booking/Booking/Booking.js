
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useParams } from 'react-router';
import './Booking.css'
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const{serviceId} = useParams();
    const [dataServices,setdataServices] = useState([]);
    const [singleServices,setSingleServices]=useState({});
    const user =useAuth();
    const email =sessionStorage.getItem('email')
    
    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setdataServices(data))
    },[])
    useEffect( () => {
        const foundData=  dataServices.find(singleService => singleService._id === serviceId)
        setSingleServices(foundData)
    },[dataServices])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        data._id =singleServices._id;
        data.email = email
        data.name=singleServices.name
        data.images = singleServices.images;
        data.price = singleServices.price;
        data.description = singleServices.description;
        console.log(data)

        axios.post('https://whispering-hollows-15183.herokuapp.com/orders', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Orderd Successfully')
                reset();
            }
        })
    };
    
    return (
        <div className='contain'>
            <div className='container w-50 box my-3'>
                <img className='images' src={singleServices?.images} alt=''/>
                <h1>Name: {singleServices?.name}</h1>
                <p>Description of {singleServices?.name}: {singleServices?.description}</p>
                <h5>Price: {singleServices?.price}</h5>
                {/* <button  className='btn btn-warning'>Book {singleServices?.name} Trip </button> */}
                
                
            </div>
            <div className='add-service ' id=''>
                <h2>Your Order</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />
                    <input {...register("email")} defaultValue={email} />
                    <input {...register("phone")} placeholder='Phone' />
                    {/* <input type="number" {...register("price")} placeholder='Price' /> */}
                    <input {...register("address")} placeholder='Address' />
                    <input {...register("city")} placeholder='City' />
                    <input {...register("country")} placeholder='Country' />
                    
                    <input type='submit'/>
                    
                </form>
            </div>
        </div>
    );
};

export default Booking;