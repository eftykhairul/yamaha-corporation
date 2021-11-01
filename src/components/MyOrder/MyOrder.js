import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const MyOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        axios.post('http://localhost:5000/services', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Added Successfully')
                reset();
            }
        })
    };
    
    return (
        <div className='add-service' id='addService'>
            <h2>Your Order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your Name' />
                <textarea {...register("email")}  placeholder='Email' />
                {/* <input type="number" {...register("price")} placeholder='Price' /> */}
                
                <input {...register("address")} placeholder='Address' />
                <input {...register("city")} placeholder='City' />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default MyOrder;
