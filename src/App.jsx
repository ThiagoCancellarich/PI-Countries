import {Route, Routes} from "react-router-dom"
import './App.css';
import Landing from "./Views/Landing page/Landing";
import Form from "./Views/Form/Form";
import Home from "./Views/Home/Home";
import Details from "./Components/Details/Details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountries } from "./Redux/actions";

const App = () =>{ 
  //* funcion utilizada para enviar acciones a los reducers
  const dispatch = useDispatch();

  //* funcion utilizada para acceder al estado global que esta en el store
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    dispatch(getCountries());
    
  }, [dispatch])

  return (
      
       <Routes>
       <Route exact path="/" element={<Landing/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/form" element={<Form allCountries={allCountries}/>}/>
       <Route path="/details/:id" element={<Details/>}/>
       </Routes>
     
  )
};

export default App;
