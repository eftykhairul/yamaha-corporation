import React from 'react';

const ShowAllProduct = ({service}) => {
    const {name,price,images,description} = service;
    const handleDelete =id =>{
        const url =`https://whispering-hollows-15183.herokuapp.com/moreService/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => 
            res.json()
            
        )
        .then(data => {
            if (data.deletedCount){
                alert('Deleted Successfully');
                window.location.reload();
            }
        })
    }
    return (
        <div>
            <div className='service pb-3'>
            <img className='images' src={images} alt='' />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            
            <p className='px-3 py-2'>About: {description?.length>30?description.slice(0,100)+"...":description}</p>
            
            <button onClick={()=> handleDelete(service._id)} className='btn btn-warning'>Delete {name} </button>
            
        </div>
        </div>
    );
};

export default ShowAllProduct;