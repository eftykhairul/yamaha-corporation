import React, { useEffect, useState } from 'react';

import Nurse from '../Nurse/Nurse';


const Nurses = () => {
    const[nurses,setNurses]= useState([])
    useEffect( ()=>{
        fetch('/nurses-info.json')
        .then(res=>res.json())
        .then(data=>setNurses(data))
    },[])
    return (
        <div id='nurses' className='container'>
            <h1 className='text-danger my-5 middle'>Our Trained Nurses</h1>
            <div className='row'>
                {
                    nurses.map(nurse=> <Nurse
                    key={nurse.name}
                    nurse={nurse}
                    ></Nurse>)
                }
            </div>
        </div>
    );
};

export default Nurses;