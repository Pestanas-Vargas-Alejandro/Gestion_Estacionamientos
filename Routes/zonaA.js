const { Router } = require("express");
const {addCliente} = require ("../Controllers/zonaA")
const router = Router()

///POST//
router.post("/",addCliente)


module.exports=router