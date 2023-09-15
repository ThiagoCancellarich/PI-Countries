const axios = require('axios');
const url = 'http://localhost:5000/countries/';
const { Country, Activity } = require('../../db');


const getCountries = async (req, res) => {
    try {
    const { data } = await axios.get(url)

    
    const foundCountries = data.map(async(data) => {

        await Country.findOrCreate({where: {
            id:data?.cca3,
            name:data?.name?.common,
            flagsImage:data?.flags?.png,
            continent:data?.continents[0],
            capital:data.capital?data.capital[0]: "Empty",
            subRegion:data?.subregion? data?.subregion: "Empty",
            area:data?.area,
            population:data?.population,
        }})

    });  

    const response = await Country.findAll(
        {include:
    {
        model: Activity 
    }}); 
    
       res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }}




module.exports = { getCountries };