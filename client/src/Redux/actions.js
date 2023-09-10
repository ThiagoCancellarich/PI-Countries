import axios from 'axios';
import { GET_COUNTRIES } from './action-types';

export const getCountries = () =>{
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/countries');
        console.log(data);
        return dispatch({type:GET_COUNTRIES, payload: data });        
    }
};
