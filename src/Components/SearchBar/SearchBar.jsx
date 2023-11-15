import { useState } from 'react';
import style from './searchBar.module.css';

const SearchBar = ({handleChange, handleSearch }) => {

    
    return (
        <div>
            
            <input className={style.searchInput} type="search" onChange={handleChange}/>
            <button className={style.searchButton} onClick={handleSearch}>Search</button>


        </div>
    )

};

export default SearchBar;