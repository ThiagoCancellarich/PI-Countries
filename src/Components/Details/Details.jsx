import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountryById } from '../../Redux/actions';
import style from './details.module.css';

const Details = () => {
     //*obtener el id del pais
    const { id } = useParams();
    const dispatch = useDispatch();
    
    //* funcion utilizada para acceder al estado global que esta en el store
    const details = useSelector((state) => state.details);
    

    useEffect(()=>{
        dispatch(getCountryById(id))
    }, [id])



    return (
        <div className={style.detailsContainer}>
      <div className={style.countryDetails}>
       
        <h1>{details.name}</h1>
        <img src={details.flagsImage} alt={details.name} />
        <h3>ID: {details.id}</h3>
        <h3>Continent: {details.continent}</h3>
        <h3>Capital: {details.capital}</h3>
        <h3>Subregion: {details.subRegion}</h3>
        <h3>Area: {details.area?.toLocaleString()} km²</h3>
        <h3>Population: {details.population?.toLocaleString()}</h3>
      </div>

      <div className={style.activityContainer}>
        
        {(details.Activities) ? (
          details.Activities.map((activity, index) => (
            <div key={index} className={style.activityBox}>
              <h3>Name: {activity.name}</h3>
              <h3>Difficulty: {activity.difficulty}</h3>
              <h3>Duration: {activity.duration}</h3>
              <h3>Season: {activity.season}</h3>
            </div>
          ))
        ) : (
          <h4>Has no activities</h4>
        )}
      </div>

      <div>
        <Link to="/home" className={style.backButton}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;

// className={style.buttonContainer}