const { Router } = require("express");
const {addCliente} = require ("../Controllers/zonaC")
const router = Router()

///POST//
router.post("/",addCliente)


module.exports=router