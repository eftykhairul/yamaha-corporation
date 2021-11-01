import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Management.css';

const Management = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        axios.post('http://localhost:5000/management', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Added Successfully')
                reset();
            }
        })
    };
    return (
        <div className='add-management'>
            <h2>Hello! Add A New Management</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")}  placeholder='Description' />
                <input {...register("email")} placeholder='Email' />
                <input {...register("phone")} placeholder='Phone' />
                <input {...register("images")} placeholder='Image' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Management;