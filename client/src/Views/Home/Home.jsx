import React from 'react';  
import SearchBar from '../../Components/SearchBar/SearchBar';
import style from './home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../Redux/Actions';


const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state)=>state.allCountries);
    
    useEffect(() => {        
        dispatch(getCountries())
    }, [dispatch]);

return (
    <div>
        <h1>Home</h1>
        <SearchBar/>
    </div>
    )
    };
    
    export default Home;

    

