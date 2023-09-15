const regexName= /^[A-Za-z]+$/;

export const validation = (event, setErrors) => {
    if(event.name === 'name'){
        if(!regexName.test(event.value)){
            setErrors((prepValue)=> {return {...prepValue, name: "The name cannot contain symbols"}})
            
        }else {
            setErrors((prevValue)=> {return {...prevValue, name: ""}})
        }}

    if(event.name === 'duration'){
       if(event.value === "00:00"){
        setErrors((prepValue)=> {return {...prepValue, duration: "The time cannot be null"}})
       } else {
        setErrors((prevValue)=> {return {...prevValue, duration: ""}})
       }    

    }
    if (event.name === "difficulty"){
        if(event.value) {
            setErrors((prevValue)=> {return {...prevValue, difficulty: ""}})
        }
    }

    if (event.name === "season"){
        if(event.value) {
            setErrors((prevValue)=> {return {...prevValue, season: ""}})
        }
    }

    if (event.name === "countries"){
        console.log(event.value)
        if(event.value) {
            setErrors((prevValue)=> {return {...prevValue, countries: ""}})
    }}
}