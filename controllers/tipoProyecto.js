
const TipoProyecto = require('../models/tipoProyecto')
const { request, response } = require('express')

//CREAR TIPOPROYECTO---------------------------------
const createTipoProyecto = async (req = request,
    res = response) => {

    try {
        const body = req.body
        const tipoProyecto = new TipoProyecto(body)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })

    }

}
//CONSULTAR TIPOPROYECTOS------------------------------
const getTipoProyectos = async (req = request,
    res = response) => {
    try {
        const tipoProyecto = await TipoProyecto.find()
        return res.json(tipoProyecto)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })

    }
}

//ACTUALIZAR TIPOPROYECTO----------------------------
const updateTipoEquipoByID = async (req = request,
    res = response) => {

    try {
        const id = req.params.id
        const { nombre } = req.body
        const data = {
            nombre
        }
        data.fechaActualizacion = new Date()
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, data, { new: true })

        return res.status(201).json(tipoProyecto)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })
    }

}

module.exports = {
    createTipoProyecto,
    getTipoProyectos,
    updateTipoEquipoByID
}