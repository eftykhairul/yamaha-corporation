import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';

const Explores = () => {
    const[infos,setinfo]= useState([]);
    
    useEffect( ()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/moreServices')
        .then(res=>res.json())
        .then(data=>setinfo(data))
    },[])
    return (
        <div id='info'>
            <h1 className='text-info my-5 middle'>Our Bikes</h1>
            <div className='service-container mt-3'>
            {
                infos.map(info=> <Explore
                key={info._id}
                info={info}
                ></Explore>)
            }
            </div>
        </div>
    );
};

export default Explores;