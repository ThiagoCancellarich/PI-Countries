import axios from 'axios';
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY_BY_ID, POST_ACTIVITIES, FILTER_CONTINENT, FILTER_POPULATION, FILTER_ORDER, FILTER_ACTIVITIES, GET_ACTIVITIES } from './action-types';


const VITE_URL = import.meta.env.VITE_URL

//* funcion para traer toda la info de la base de datos
export const getCountries = () =>{
    return async (dispatch) => {
        const { data } = await axios.get(`${VITE_URL}/countries`);
        return dispatch({type:GET_COUNTRIES, payload: data });        
    }
};
//* funcion para traer un pais recibido por query
export const getByName = (name) => {
    return async (dispatch) => {
        const { data } = await axios.get(`${VITE_URL}/countries/name?name=${name}`);
        
        return dispatch ({type:GET_COUNTRY_BY_NAME, payload: data});
    }
};
//* funcion para traer un pais recibido por params
export const getCountryById = (id) => {
    return async (dispatch) => {
    const { data } = await axios.get(`${VITE_URL}/countries/${id}`);
   
    
    return dispatch({type:GET_COUNTRY_BY_ID, payload: data});
    }
}

export const postActivities = (activity) => { 
    return async (dispatch) => {
        const { data } = await axios.post(`${VITE_URL}/activity`, activity);
        return dispatch({type:POST_ACTIVITIES, payload: data });

    }
}

export const getActivities = () => {
    return async (dispatch) => {
        const { data } = await axios.get(`${VITE_URL}/activity`)
        return dispatch({type:GET_ACTIVITIES, payload: data});
    }
}

export const filterContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
    }
}

export const filterOrder = (order) => {
    return {
        type: FILTER_ORDER,
        payload: order
    }
}

export const filterPopulation = (population) => {
    return { 
        type: FILTER_POPULATION,
        payload: population
    }    
}

export const filterActivities = (activity) => {
    return {
        type: FILTER_ACTIVITIES,
        payload: activity
    }
}




