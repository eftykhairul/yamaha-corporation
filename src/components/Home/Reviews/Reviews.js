import React from 'react';
import useAuth from '../../../hooks/useAuth';
import ReactStars from "react-rating-stars-component";
import './Review.css'


const Reviews = ({review}) => {
    // console.log(review)
    const {user}=useAuth();
    const {name,yourReview,rating} = review;
    return (
        <div className='service pb-3 '>
            {/* <h2>User: {user.email}</h2> */}
            <h2>Product Name: {name}</h2>
            <h2>Review: {yourReview}</h2>
            <h5>Rating</h5>
            <div className='rate'>
                <ReactStars
                count={rating}
                fullIcon={<i className="fa fa-star"></i>}
                size={24}
                activeColor="#ffd700"
            />
            </div>
        </div>
    );
};

export default Reviews;