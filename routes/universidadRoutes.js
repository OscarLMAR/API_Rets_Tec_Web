const {Router} = require('express')
const { createUniversidad,
    getUniversidad,
    updateUniversidad} = require ('../controllers/universidadController')
const router = Router()

//CREAR----------------------------
router.post('/', createUniversidad)


//CONSULTAR TODOS------------------ 
router.get('/', getUniversidad)

//update, actualizar
router.put('/:id', updateUniversidad)

module.exports = router