import {Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./Views/Home/home";
import Landing from "./Views/Landing page/Landing";
import Form from "./Views/Form/Form";
import Details from "./Views/Details/Details";

const App = () =>{ 

  return (
      
       <Routes>
       <Route exact path="/" element={<Landing/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/form" element={<Form/>}/>
       <Route path="/details/:id" element={<Details/>}/>
       </Routes>
     
  )
};

export default App;
