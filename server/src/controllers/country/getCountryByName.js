const {Country} = require('../../db');

const countryByNameHandler = async (req, res) => {
    try { 
        const { name } = req.query;
        
        if(!name) return res.json("Name is required");

        let lowerName = name.toLowerCase();
        const allCountries = await Country.findAll();
        
        const filteredCountries = allCountries.filter((country) => {
            if ((country.dataValues.name).toLowerCase().includes(lowerName)) {
                return country.dataValues.name
            }
        });
            if (filteredCountries.length) {
                res.status(200).json(filteredCountries)
            } else {
                res.status(200).json("No country found")
            };       
            
        } catch (error) {
            res.status(404).json({ error: error.message});
            
        }
    };





module.exports = {countryByNameHandler};