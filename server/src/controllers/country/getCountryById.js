const { Country , Activity } = require('../../db');

// funcion para traer un pais por medio de un get por el id
const getCountryById = async (req , res) => {
    try {
        const {idPais} = req.params;
        // console.log(idPais);
        
// metodo para buscar por medio del id el pais que deseamos
    const idFound = await Country.findByPk(idPais,{
         // de esta manera podemos incluir la informacion de las actividades en un pais
        include: [
            {
                model: Activity,
                through: {attributes: []},
                attributes: ['name', 'difficulty', 'duration', 'season'],
            }
        ],
    })
    if(!idFound) throw new Error('id not found')

        res.status(200).json(idFound)
    } catch (error) {
        res.status(404).json({error: error.message});
        
    }
}

module.exports = {getCountryById}





