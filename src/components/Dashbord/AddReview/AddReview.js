import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const [dataServices,setdataServices] = useState([]);

    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/moreServices')
        .then(res => res.json())
        .then(data => setdataServices(data))
    },[])
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        
        console.log(data.email)
        console.log(handleSubmit)

        axios.post('https://whispering-hollows-15183.herokuapp.com/reviewData', data)
        .then(res=>{
            if (res.data.insertedId){
                alert('Rated Successfully')
                reset();
            }
        })
    };

    return (
        <div className='row'>
            <div className='contain container col-lg-6 col-sm-12 col-12'>
                <div className='box'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder='Product Name' /><br/>
                        <input {...register("yourReview")} placeholder='Your Review' /><br/>
                        <input {...register("rating")} placeholder='Rating' /><br/>

                        <input type='submit'/>
                    
                    </form>
                
                </div>
            </div>
        </div>
    );
};

export default AddReview;