const { request, response, json } = require("express")
const bcryptjs = require("bcryptjs")
const pool = require ("../DB/connection")
const consutasEmp = require("../Operations/empleados");

const loginEmpleados = async (req=request, res=response) =>{
    const {
        N_Empleado,
        Contrasena
    }= req.body

    if(
        !N_Empleado|| 
        !Contrasena
     ) {
        res.status(400).json({Atención:"Falta informacion del empleado"})
        return
    }
    let conn;

    try {
        conn = await pool.getConnection()

        const [Empleados] = await conn.query(consutasEmp.queryloginEmpleados, [N_Empleado])
        if (!Empleados || Empleados.Status === 'I' ){
            let code = !Empleados ? 1 :2;
            res.status(403).json({Atención:`El N° de empleado o la Contraseña son incorrectos`,errorCode:code})
            return
        }

        const accesoValido = bcryptjs.compareSync(Contrasena, Empleados.Contrasena)

        if(!accesoValido){
            res.status(403).json({Atención:`El N° de empleado o la Contraseña son incorrectos`, errorCode:3})
            return
        }

        res.json({Atención:`El N° de empleado ${N_Empleado} ha iniciado sesión satisfactoriamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

module.exports= {loginEmpleados}