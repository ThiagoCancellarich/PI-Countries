import React from 'react';
import style from './landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <><div>
            <h1>Bienvenid@s</h1>
            {/* <img src="https://images.pexels.com/photos/414916/pexels-photo-414916.jpeg" alt='' /> */}
        </div>
        <Link to='/home'>
                <button className='enter-button'>Enter</button>
        </Link></>
    
    )
};

export default Landing;