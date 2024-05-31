
const etapaProyecto = require('../models/etapaProyecto')
const EtapaProyecto = require('../models/etapaProyecto')
const {request, response} = require('express')

//CREA ESTAPA DEL PROYECTO//

const createEtapaProyecto = async(req = request, res = response) =>{
    try {
        const body = req.body
        const etapaProyecto = new EtapaProyecto(body)
        etapaProyecto.save()
       return res.status(201).json(etapaProyecto)

    } catch (e) {
        return res.status(500).json({
            msg: 'Error al crear etapas del proyecto' + e
        })
        
    }
}

//CONSULTAR ETAPAS DEL PROYECTO//

const getEtapasProyecto = async(req = request, res = response) =>{
    try {
        const etapasProyecto = await EtapaProyecto.find()
        return res.json(etapasProyecto)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error al consultar etapas del proyecto' + e
        })
        
    }
}

//ACTUALIZAR ETAPAS DEL PROYECTO//

const updateEtapaProyecto = async (req = request, res = response) =>{
    try {
        const id = req.params.id
        const {nombre} = req.body
        const data ={
            nombre
        }
        data.fechaActualizacion = new Date()
        const etapaProyecto = await EtapaProyecto.findByIdAndUpdate(id, data, {new:true})
        return res.status(201).json(etapaProyecto)
    } catch (e) {
        return res.status(500).json({
            msg: 'Error al actualizar etapas del proyecto' + e
        })
    }
}

module.exports = {
    createEtapaProyecto,
    getEtapasProyecto,
    updateEtapaProyecto
}