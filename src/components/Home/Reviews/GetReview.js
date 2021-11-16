import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const GetReview = () => {
    const[getReview,setGetReview]= useState([]);
    useEffect( ()=>{
        fetch('https://whispering-hollows-15183.herokuapp.com/reviewData')
        .then(res=>res.json())
        .then(data=>setGetReview(data));
    },[])
    return (
        <div id='services'>
            <div className='service-container mt-3'>
            {
                getReview.map(review=> <Reviews
                    key={review._id}
                    review={review}
                ></Reviews>
                    
                )
            }
            </div>
        </div>
    );
};

export default GetReview;