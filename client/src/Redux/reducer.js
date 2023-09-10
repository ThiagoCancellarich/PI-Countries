import { GET_COUNTRIES } from "./action-types";

const initialState = {
    allCountries: [],
    countries: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES: 
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }
        
        
        
        default:
            return {...state}
    }

};

export default reducer;