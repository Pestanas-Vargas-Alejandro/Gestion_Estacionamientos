const { Router } = require("express");
const {loginEmpleados} = require ("../Controllers/empleados")
const router = Router()

///POST//
router.post("/login",loginEmpleados)

module.exports=router