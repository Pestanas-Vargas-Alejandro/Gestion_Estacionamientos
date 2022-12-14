const { request, response, json } = require("express")
const bcryptjs = require("bcryptjs")
const pool = require ("../DB/connection")
const consutasAdmin = require("../Operations/administrador");

const listEmpleados = async (req=request, res=response) =>{
    let conn;

    try {
        conn = await pool.getConnection()
        const Empleados = await conn.query(consutasAdmin.queryListEmpleados, (error)=>{throw new error})
        if (!Empleados){
            res.status(404).json ({Atención: "No se encontraron empleados"})
            return
        } 

        res.json({Empleados})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const listEmpleadoByNombre = async (req=request, res=response) =>{
    const {Nombre}= req.params
    let conn;

    try {
        conn = await pool.getConnection()
        const [Empleados] = await conn.query(consutasAdmin.queryListEmpleadoByNombre, [Nombre], (error)=>{throw new error})

        if (!Empleados){
            res.status(404).json ({Atención: `No se encontraron empleados con el nombre ${Nombre}`})
            return
        } 

        res.json({Empleados})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const addEmpleado = async (req=request, res=response) =>{
    const {
        Status,
        Zona,
        Contrasena,
        Nombre,
        APaterno,
        AMaterno
    }= req.body

    if(
        !Status||
        !Zona||  
        !Contrasena||
        !Nombre|| 
        !APaterno|| 
        !AMaterno 
     ) {
        res.status(400).json({Atención:"Falta informacion del empleado"})
        return
    }
    let conn;

    try {
        conn = await pool.getConnection()

        const [Empleados] = await conn.query(consutasAdmin.queryEmpleadoExists, [Nombre])
        if (Empleados){
            res.status(403).json({Atención:`El empleado ${Nombre} ${APaterno} ya se encuentra registrado`})
            return
        }

        const salt = bcryptjs.genSaltSync()
        const contrasenaCifrada = bcryptjs.hashSync(Contrasena,salt)

        const {affectedRows} = await conn.query(consutasAdmin.queryAddEmpleado, [
            Status,
            Zona,
            contrasenaCifrada,
            Nombre,
            APaterno,
            AMaterno
        ], (error)=>{throw new error})

        if (affectedRows === 0){
            res.status(404).json ({Atención: `No se puedo agregar el empleado ${Nombre} ${APaterno}`})
            return
        } 
        res.json({Atención:`El empleado ${Nombre} ${APaterno} se agrego satisfactoriamente a la zona ${Zona}`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const updateEmpleado = async (req=request, res=response) =>{
    const {
        Status,
        Zona,
        Nombre,
        APaterno,
        AMaterno
    }= req.body

    if(
        !Status||
        !Zona||  
        !Nombre|| 
        !APaterno|| 
        !AMaterno 
     ) {
        res.status(400).json({Atención:"Falta informacion del empleado"})
        return
    }
    let conn;

    try {
        conn = await pool.getConnection()

        const [Empleados] = await conn.query(consutasAdmin.queryInfoEmpleado, [Nombre])

        if (!Empleados){
            res.status(403).json({Atención:`El empleado ${Nombre} no se encuentra registrado`})
            return
        }

        const {affectedRows} = await conn.query(consutasAdmin.queryUpdateEmpleado, [
            Status || Empleados.Status,
            Zona || Empleados.Zona,
            APaterno || Empleados.APaterno,
            AMaterno || Empleados.AMaterno,
            Nombre
        ], (error)=>{throw new error})
        
        if (affectedRows === 0){
            res.status(404).json ({Atención: `No se puedo actualizar el registro del empleado ${Nombre}`})
            return
        } 
        res.json({Atención:`El empleado ${Nombre} se actualizo satisfactoriamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const listClienteByFolioZA = async (req=request, res=response) =>{
    const {Folio}= req.params
    let conn;

    try {
        conn = await pool.getConnection()
        const [Clientes] = await conn.query(consutasAdmin.queryListClienteByFolioZA, [Folio], (error)=>{throw new error})

        if (!Clientes){
            res.status(404).json ({Atención: `No se encontraron registros con el folio ${Folio}`})
            return
        } 

        res.json({Clientes})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const listClienteByFolioZB = async (req=request, res=response) =>{
    const {Folio}= req.params
    let conn;

    try {
        conn = await pool.getConnection()
        const [Clientes] = await conn.query(consutasAdmin.queryListClienteByFolioZB, [Folio], (error)=>{throw new error})

        if (!Clientes){
            res.status(404).json ({Atención: `No se encontraron registros con el folio ${Folio}`})
            return
        } 

        res.json({Clientes})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

const listClienteByFolioZC = async (req=request, res=response) =>{
    const {Folio}= req.params
    let conn;

    try {
        conn = await pool.getConnection()
        const [Clientes] = await conn.query(consutasAdmin.queryListClienteByFolioZC, [Folio], (error)=>{throw new error})

        if (!Clientes){
            res.status(404).json ({Atención: `No se encontraron registros con el folio ${Folio}`})
            return
        } 

        res.json({Clientes})
    } catch (error) {
        console.log(error)
        res.status(500).json({json})

    } finally{
        if (conn){
            conn.end()
        }
    }
}


module.exports= {listEmpleados,listEmpleadoByNombre,addEmpleado,updateEmpleado,listClienteByFolioZA,listClienteByFolioZB,listClienteByFolioZC}