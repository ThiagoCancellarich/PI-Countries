import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getByName, getCountries } from '../../Redux/actions';
import Card from '../../Components/Card/Card';
import { Link } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import Paginado from '../../Components/Paginado/paginado';




const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
   
   

    const [countryName, setCountryName] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [pageNum, setPageNum] = useState(1);

    const max = Math.ceil(countries.length/countriesPerPage); 

    


    const handleChange = (event) => {
        setCountryName(event.target.value)
    };

    const handleSearch = () => {
        dispatch(getByName(countryName))
    };
    useEffect(() => {
        if(!countries.length){
            dispatch(getCountries())
        }
        dispatch(getActivities())
    }, [dispatch]);
    
    
    


    return (
        <div>
          
            <SearchBar handleSearch={handleSearch} handleChange={handleChange} />
            <Nav setCurrentPage={setCurrentPage} setPageNum={setPageNum}/>
            <div>
                <Link to='/form'>
                    <button>Create activity</button>
                </Link>
                <div className={style.divCard}>
                {countries.length && typeof countries !== 'string'
                    ? countries.slice((currentPage-1) * countriesPerPage, (currentPage-1) * countriesPerPage + countriesPerPage)
                    .map((countries) => {
                        return (<Card
                            id={countries.id}
                            key={countries.name}
                            name={countries.name}
                            flagsImage={countries.flagsImage}
                            continent={countries.continent} />);
                    })

                    : <p>No Cards</p>}
                    </div>
            </div>
            <div>
               
            </div>
            <Paginado
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    max={max} 
                    pageNum={pageNum}
                    setPageNum={setPageNum}/>
        </div>
    )
};

export default Home;


