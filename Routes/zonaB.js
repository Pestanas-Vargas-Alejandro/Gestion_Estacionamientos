const { Router } = require("express");
const {addCliente} = require ("../Controllers/zonaB")
const router = Router()

///POST//
router.post("/",addCliente)


module.exports=router