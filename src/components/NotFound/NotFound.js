import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404/2469986.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container not-found-container'>
            <img className='not-found ' src={notfound} alt='' /><br/>
            <Link to='/'><button className='btn btn-warning'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;