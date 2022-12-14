const express = require ('express')
const administradorRouter = require ('./Routes/administrador')
const empleadosRouter = require ('./Routes/empleados')
const zonaARouter = require ('./Routes/zonaA')
const zonaBRouter = require ('./Routes/zonaB')
const zonaCRouter = require ('./Routes/zonaC')
const cors = require ('cors')

class Server{
    constructor(){
        this.app = express()
        this.paths = {
            administrador:"/api/v1/administrador",
            empleados:"/api/v1/empleados",
            zonaA:"/api/v1/zonaA",
            zonaB:"/api/v1/zonaB",
            zonaC:"/api/v1/zonaC"
        }
        this.middelwares()
        this.routes()
    }

    routes(){      
        this.app.use(this.paths.administrador, administradorRouter)
        this.app.use(this.paths.empleados, empleadosRouter)
        this.app.use(this.paths.zonaA, zonaARouter)
        this.app.use(this.paths.zonaB, zonaBRouter)
        this.app.use(this.paths.zonaC, zonaCRouter)
    }

    middelwares (){
        this.app.use(cors()) //Permite solicitudes de origen cruzado
        this.app.use(express.json()) // Habilita la lectura de contenido en formato json
    }

    listen() {
        this.app.listen(process.env.PORT,()=>{
        console.log("Backend en ejecución en el puerto", process.env.PORT)
        })
    }

}
module.exports = Server