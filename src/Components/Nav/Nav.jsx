import { useDispatch, useSelector } from "react-redux";
import { filterActivities, filterContinent, filterOrder, filterPopulation, getCountries } from "../../Redux/actions";
import style from './nav.module.css';


const Nav = ({setCurrentPage, setPageNum}) =>{
const dispatch = useDispatch();
const allActivities = useSelector((state)=> state.allActivities);
 

const handleContinent = (event) =>{
    if(event.target.value === "All"){
        dispatch(getCountries());

    }
    dispatch(filterContinent(event.target.value));
    setCurrentPage(1)
    setPageNum(1);
};

const handleOrder = (event) =>{
    dispatch(filterOrder(event.target.value));
    setCurrentPage(1)
    setPageNum(1);
};

const handlePopulation = (event) =>{
    dispatch(filterPopulation(event.target.value));
    setCurrentPage(1)
    setPageNum(1);
};

const handleActivities = (event) =>{
    dispatch(filterActivities(event.target.value))
    setCurrentPage(1)
    setPageNum(1);
};
        



    return(
        <div>
            <nav>                
                <button value= "All"  className={style.filterButton} onClick={handleContinent}>🔄️</button>
                <select name="continent"  className={style.filterButton} onChange={handleContinent}>
                    <option disabled selected>Filter by Continent</option>                   
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctica</option>

                </select>
                <select name="Alphabetical Order" className={style.filterButton} onChange={handleOrder}>
                <option disabled selected>Alphabetical Order</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                <select name="Filtered population" className={style.filterButton} onChange={handlePopulation}>
                <option disabled selected>Filtered Population</option>
                    <option value="max to min">Max to Min</option>
                    <option value="min to max">Min to Max</option>
                </select>
                {allActivities.length?
                <select name="Activities" className={style.filterButton} onChange={handleActivities}>
                <option disabled selected>Activities</option>
                <option value="Summer">Summer</option>
                <option value="Autumn">Autumn</option>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                </select>
                    : ""}
                    
            
            </nav>
        </div>
    )

}


export default Nav;