const { Router } = require('express')
const { createTipoProyecto, getTipoProyectos, updateTipoEquipoByID } = require('../controllers/tipoProyecto')
const router = Router()

//CREAR----------------------------
router.post('/', createTipoProyecto)


//CONSULTAR TODOS------------------ 
router.get('/', getTipoProyectos)

//update, actualizar
router.put('/:id', updateTipoEquipoByID)

module.exports = router