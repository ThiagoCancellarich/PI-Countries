import React, { useEffect, useState } from 'react';
import { getCountries, postActivities } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getByName } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import style from './form.module.css';
import { validation } from './validations';


const Form = () => {
    const allCountries = useSelector((state) => state.allCountries);
    const countries = allCountries;
    
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "You must choose a difficulty",
        duration: "",
        season: "You must choose a season",
        countries: "You must choose a country"
    });
    
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
    });

    //* funcion para cargar la info a mi estado local
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
        validation(event.target, setErrors);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();

        if (!input.name || !input.difficulty || !input.duration || !input.season || input.countries.length === 0) {
            alert("Please complete all required fields.");
            return;
          }
        //   await getByName(input.name);
        if (!errors.name && !errors.difficulty && !errors.duration && !errors.season && !errors.countries) {

            
            dispatch(postActivities(input))
            setInput({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []
            });       
        } else {
        alert("errors were found")
    }}

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        
        setInput((prevInput) => ({
          ...prevInput,
          countries: selectedOptions,
        }));
        validation(event.target,setErrors)
      };
      


    return (
        <div className={style.formContainer}> 
            <h1 className={style.formTitle}>Activities Creator</h1> 
            <form onSubmit={handleSubmit}>
            {/* <p className={style.json}>{JSON.stringify(input)}</p> */}
                <div className={style.formField}> 
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={input.name} onChange={handleChange} />
                    {errors.name?(<p className={style.errorMessage}>{errors.name}</p>): ""}
                </div>

                <div className={style.formField}> 
                    <label htmlFor="difficulty">Difficulty</label>
                    <select name='difficulty'  onChange={handleChange} >                    
                    <option disabled selected>Difficulty</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    </select>
                    {errors.difficulty?(<p className={style.errorMessage}>{errors.difficulty}</p>): ""}
                </div>

                <div className={style.formField}> 
                    <label htmlFor="duration">Duration</label>
                    <input type="time" name='duration' value={input.duration} onChange={handleChange} />
                    {errors.duration?(<p className={style.errorMessage}>{errors.duration}</p>): ""}
                </div>

                <div className={style.formField}> 
                    <label htmlFor="season">Season</label>
                    <select name='season' value={input.season} onChange={handleChange} >
                    <option disabled selected>Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                     </select>
                     {errors.season?(<p className={style.errorMessage}>{errors.season}</p>): ""}
                </div>

                <div className={style.formField}> 
                    <label htmlFor="countries">Countries</label>
                    <select multiple type="text" name='countries'                  
                    value={input.countries} 
                    onChange={handleSelectChange}>

                        {countries.map((country)=>(
                            <option key={country.id} value={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    {errors.countries?(<p className={style.errorMessage}>{errors.countries}</p>): ""}
                </div>

                <button className={style.createButton} type='submit'>Create</button>
                <div>
                <Link to='/home'>
                    <button className={style.backButton}>Back</button> 
                </Link>
                </div>
                {/* <p className={style.json}>{JSON.stringify(errors)}</p> */}
            </form>
        </div>
    )
};

export default Form;