import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Speciallist.css';

const Speciallist = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data)
        axios.post('http://localhost:5000/speciallist', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Added Successfully')
                reset();
            }
        })
    };
    return (
        <div className='add-speciallist'>
            <h2>Hello! Add A New Speciallist</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <textarea {...register("description")}  placeholder='Description' />
                
                <input {...register("images")} placeholder='Image' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Speciallist;