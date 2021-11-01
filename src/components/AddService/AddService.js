import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const Addservice = () => {
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
            <h2>Hello! Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")}  placeholder='Description' />
                <input type="number" {...register("price")} placeholder='Price' />
                
                <input {...register("images")} placeholder='Image' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;