const { request, response, json } = require("express")
const pool = require ("../DB/connection")
const consutasClientes = require("../Operations/zonaA");

const addCliente = async (req=request, res=response) =>{
    const {
        N_Empleado,
        Placas,
        Marca,
        Modelo,
        Color,
        Cajon,
        Salida,
        Saldo
    }= req.body

    if(
        !N_Empleado||
        !Placas||  
        !Marca||
        !Modelo|| 
        !Color|| 
        !Cajon|| 
        !Salida|| 
        !Saldo 
     ) {
        res.status(400).json({Atención:"Falta informacion del registro"})
        return
    }
    let conn;

    try {
        conn = await pool.getConnection()

        const {affectedRows} = await conn.query(consutasClientes.queryAddCliente, [
            N_Empleado,
            Placas,
            Marca,
            Modelo,
            Color,
            Cajon,
            Salida,
            Saldo
        ], (error)=>{throw new error})

        if (affectedRows === 0){
            res.status(404).json ({Atención: `No se puedo agregar el registro`})
            return
        } 
        res.json({Atención:`El registro se agrego satisfactoriamente`})
    } catch (error) {
        console.log(error)
        res.status(500).json({error})

    } finally{
        if (conn){
            conn.end()
        }
    }
}

module.exports= {addCliente}