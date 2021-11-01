import React from 'react';
import { Link } from 'react-router-dom';

const Nurse = ({nurse}) => {
    const {name,images,expert,_id}=nurse;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <Link to={`/nurseInfo/${_id}`}>
                <img className='images mx-5' src={images} alt='' />
            </Link>
            <h3 className='middle'>Name: {name}</h3>
            <h5 className='text-success middle'>{expert}</h5>
        </div>
    );
};

export default Nurse;