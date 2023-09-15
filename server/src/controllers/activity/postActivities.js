const { Activity, Country } = require('../../db');

const postActivitiesHandler = async (req, res) => {

    try {
        const { name, duration, difficulty, season, countries} = req.body;

        if( !name || !duration || !difficulty || !season || !countries) throw new Error('Insufficient parameters')
    // Crea la actividad turistica en la base de datos
        const newActivity = await Activity.create({name, duration, difficulty, season})
    // Relaciona la actividad con los paises indicados
    
        await newActivity.addCountries(countries)

// Obtener la actividad con la relacion a los paises asociados
        const activityCountry = await Activity.findByPk(newActivity.id, {
            include: [
                {
                    model: Country,
                    through: { attributes: [] },
                    // attributes: [ 'id', 'name' ]
                }
            ]
        })
        if(!newActivity) throw new Error('The activity was not created')
        res.status(200).json(activityCountry)
    } catch (error) {
        res.status(404).json({ error: error.message})
        
        
    }
}

module.exports = {postActivitiesHandler};