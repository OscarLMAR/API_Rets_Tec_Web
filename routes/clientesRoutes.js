const { Router } = require('express')
const { createClientes, getClientes, updateClienteById } = require('../controllers/clienteController')
const router = Router()

//CREAR----------------------------
router.post('/', createClientes)

//CONSULTAR TODOS------------------ 
router.get('/', getClientes)

//update, actualizar---------------
router.put('/:id', updateClienteById)

module.exports = router