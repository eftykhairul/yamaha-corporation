import React from 'react';
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
    const {user} =useAuth();

    
    useEffect(()=>{
        // fetch('https://whispering-hollows-15183.herokuapp.com/services')
        fetch('https://whispering-hollows-15183.herokuapp.com/moreServices')
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
        data.email =user.email
        data.name=singleServices.name
        data.images = singleServices.images;
        data.price = singleServices.price;
        data.description = singleServices.description;
        console.log(data.email)
        console.log(handleSubmit)

        axios.post('https://whispering-hollows-15183.herokuapp.com/orders', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Orderd Successfully')
                reset();
            }
        })
    };
    
    return (
        <div className='row'>
            <div className='contain container col-lg-6 col-sm-12 col-12'>
                <div className='box'>
                    <img className='images' src={singleServices?.images} alt=''/>
                    <h1>Name: {singleServices?.name}</h1>
                    <p>Description of {singleServices?.name}: {singleServices?.description}</p>
                    <h5>Price: {singleServices?.price}</h5>
                    {/* <button  className='btn btn-warning'>Book {singleServices?.name} Trip </button> */}
                
                
                </div>
                <div className='m-5'>
                    <h2>Your Order</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} defaultValue={user?.displayName} />
                    
                        <input {...register("email")} defaultValue={user.email} />
                        <input {...register("phone")} placeholder='Phone' />
                        <input {...register("address")} placeholder='Address' />
                        <input {...register("city")} placeholder='City' />
                        <input {...register("country")} placeholder='Country' />

                        <input type='submit'/>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;