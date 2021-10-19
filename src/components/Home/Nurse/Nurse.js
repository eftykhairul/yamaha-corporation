import React from 'react';
import { Link } from 'react-router-dom';

const Nurse = ({nurse}) => {
    const {name,img,expert,id}=nurse;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <Link to={`/nurseInfo/${id}`}>
                <img className='images mx-5' src={img} alt='' />
            </Link>
            <h3 className='middle'>Name: {name}</h3>
            <h5 className='text-success middle'>{expert}</h5>
        </div>
    );
};

export default Nurse;