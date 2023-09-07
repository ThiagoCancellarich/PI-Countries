const axios = require('axios');
const url = 'http://localhost:5000/countries/';
const { Country } = require('../../db');


const getCountries = async (req, res) => {
    try {
    const { data } = await axios.get(url)

    // console.log(data.length)

for(let i = 0; i < data.length; i++) {

await Country.create({
    id:data[i]?.cca3,
    name:data[i]?.name?.common,
    flagsImage:data[i]?.flags?.png,
    continent:data[i]?.continents[0],
    capital:data[i].capital?data[i].capital[0]: "Empty",
    subRegion:data[i]?.subregion,
    area:data[i]?.area,
    population:data[i]?.population,
})

}
       res.status(200).json({Country});
    } catch (error) {
        res.status(400).json(error.message);
    }
};



module.exports = { getCountries };