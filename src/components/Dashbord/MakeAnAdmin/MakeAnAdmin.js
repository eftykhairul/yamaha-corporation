import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const MakeAnAdmin = () => {
    const [email,setEmail]=useState('');
    const [success,setSuccess]=useState(false);

    const handleOnBlur =e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit =e=>{
        const user = {email};
        fetch('https://whispering-hollows-15183.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log(data)
                setSuccess(true);
                
            }
            
        })

        e.preventDefault()
    }
    return (
        <div className='add-service' id='addService'>
            <h2>Add A New Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input type="email" onBlur={handleOnBlur} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <button type="submit" class="btn btn-primary">Make Admin</button>
            </form>
            {success && <div class="alert alert-success" role="alert">Successfully Added</div>}
        </div>
    );
};

export default MakeAnAdmin;