import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';



const Doctors = () => {
    const [infos,setInfos]=useState([])
    useEffect(()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/speciallist')
        .then(res=>res.json())
        .then(data=>setInfos(data))
    },[])
    return (
        <div id='doctors' className='container'>
            <h1 className='text-info my-5 middle'>Our Experts</h1>
            <div className='row'>
                {
                    infos.map(doctor=><Doctor
                    key={doctor.expert}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;