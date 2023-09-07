const { Activity, Country } = require('../../db');


const getActivitiesHandler = async (req, res) => {
    try {
        // console.log('estoy ahi');
        const activity = await Activity.findAll({
            include: [
                {
                    model: Country,
                    attributes: { attributes: [] },

                }
            ]
        })

        if(!activity) throw new Error('The Activity does not exist')
        res.status(200).json(activity);

    } catch (error) {
        res.status(404).json({ error: error.message})        
    }
}

module.exports = {getActivitiesHandler};