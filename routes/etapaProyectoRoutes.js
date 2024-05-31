const {Router} = require('express')
const {createEtapaProyecto,
    getEtapasProyecto,
    updateEtapaProyecto} = require('../controllers/etapaProyecto')
const router = Router()

//CREAR----------------------------
router.post('/', createEtapaProyecto)


//CONSULTAR TODOS------------------ 
router.get('/', getEtapasProyecto)

//update, actualizar
router.put('/:id', updateEtapaProyecto)

module.exports = router