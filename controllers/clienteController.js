const Cliente = require('../models/cliente')
const { request, response } = require('express')

//AGREGAR CLIENTE----------------------------------------------------
const createClientes = async (req = request, res = response) => {
    try {
        const body = req.body
        const cliente = new Cliente(body)
        await cliente.save()
        return res.status(201).json(cliente)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })
    }

}

//CONSULTA CLIENTE--------------------------------------------------
const getClientes = async (req = request, res = response) => {
    try {
        const clientes = await Cliente.find()
        return res.json(clientes)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })
    }
}

//ACTUALIZAR CLIENTE--------------------------------------------------
const updateClienteById = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const { nombre, email } = req.body
        const data = {
            nombre, 
            email
        }
        data.fechaActualizacion = new Date()
        const cliente = await Cliente.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(cliente)
    } catch (e) {
        return res.status(500).json({
            msj: e
        })
    }
}


module.exports = {
    createClientes,
    getClientes,
    updateClienteById
}
