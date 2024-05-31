const Universidad = require('../models/universidad')
const {request, response, json} = require ('express')

//CREAR UNIVERISDAD//

const createUniversidad = async (req = request, res = response) =>{
    try {
        const data = req.body
        const universidad = new Universidad(data)
        await universidad.save()
        return res.status(201).json(universidad)

    } catch (e) {
        return res.status(500),json({
            msg: 'Error en crear Universidad' + e
        })
    }
}

//CONSULTA UNIVERSIDAD//

const getUniversidad = async(req = request, res = response) =>{

    try {
        const universidad = await Universidad.find()
        return res.json(universidad)
    } catch (e) {
        return res.status(500),json({
            msg: 'Error al consultar universidad' + e
        })
        
    }
}

//ACTUALIZAR UNIVERSIDAD//

const updateUniversidad = async (req = request, res = response) =>{
    try {
        const id = req.params.id
        const {nombre, ubicacion} = req.body
        const data = {
            nombre,
            ubicacion
        }
        data.fechaActualizacion = new Date()
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(universidad)
    } catch (e) {
        return res.status(500),json({
            msg: 'Error en actualizar universidad' + e
        })
    }
}

module.exports = {
    createUniversidad,
    getUniversidad,
    updateUniversidad
}