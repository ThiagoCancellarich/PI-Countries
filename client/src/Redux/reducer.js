import { GET_COUNTRY_BY_ID, GET_COUNTRIES, GET_COUNTRY_BY_NAME, POST_ACTIVITIES, FILTER_CONTINENT, FILTER_ORDER, FILTER_POPULATION, GET_ACTIVITIES, FILTER_ACTIVITIES } from "./action-types";

const initialState = {
    allCountries: [],
    countries: [],
    details: [],
    allActivities: [],    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
            //? action para todos los paises
        case GET_COUNTRIES: 
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }
            //? action para la busqueda por query 
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
            //? action para la busqueda por id 
        case GET_COUNTRY_BY_ID: 
            return {
                ...state,
                details: action.payload
            }
            //? action para postear una actividad
        case POST_ACTIVITIES:
            return {
                ...state,
                allActivities: [...state.allActivities, action.payload]
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities:  action.payload
            }


        case FILTER_CONTINENT:
            const copyCountries = [...state.allCountries]
            const continentFiltered = copyCountries.filter((element) => element.continent === action.payload)

            return{
                ...state,
                countries:  continentFiltered            

            }
        case FILTER_ORDER:
            const copyOrder = [...state.countries]
            const order = copyOrder.sort((a,b) => a.name.localeCompare(b.name));
            
            return {
                ...state,
                countries: action.payload === "A-Z"
                ?order 
                :order.reverse()
            }

        case FILTER_POPULATION:
            const copyPopulation = [...state.countries]
            const populationOrder = copyPopulation.sort((a,b) => a.population- b.population);

            return {
                ...state,
                countries: action.payload === "max to min"
                ?populationOrder.reverse()
                :populationOrder
            }

        case FILTER_ACTIVITIES:
            const copyAllCountries = [...state.allCountries]
            const countryActivities = copyAllCountries.filter((pais) => {
                return pais.Activities.some((actividad) => actividad.season === action.payload);
              });

            return {
                ...state,
                countries : countryActivities

            }
            


        
        
        
        default:
            return {...state}
    }

};

export default reducer;