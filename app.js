const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const {mongoConn} = require('./databases/configuracion')
const cors = require('cors')

app.use(cors({
    origin:'*'
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoConn ()

const tipoProyecto = require('./routes/tipoProyecto')
const clientes = require('./routes/clientesRoutes')
const proyectos = require('./routes/proyectoRoutes')
const universidades = require('./routes/universidadRoutes')
const etapasProyecto = require('./routes/etapaProyectoRoutes')

app.use('/api/v1/tipoProyectos', tipoProyecto)
app.use('/api/v1/clientes', clientes)
app.use('/api/v1/proyectos', proyectos)
app.use('/api/v1/universidades', universidades)
app.use('/api/v1/etapasProyecto', etapasProyecto)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj:'No encontrado',
        status:404
    })

})
module.exports = app