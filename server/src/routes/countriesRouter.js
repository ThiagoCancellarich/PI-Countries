const { Router } = require('express');
const {getCountries} = require('../controllers/country/getCountries');
const { countryByNameHandler } = require('../controllers/country/getCountryByName');
const { getCountryById } = require('../controllers/country/getCountryById');


const countriesRouter = Router();


countriesRouter.get("/", getCountries);
countriesRouter.get('/name/', countryByNameHandler); //query
countriesRouter.get('/:idPais', getCountryById); // params





module.exports = {countriesRouter};