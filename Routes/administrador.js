const { Router } = require("express");
const {listEmpleados,listEmpleadoByNombre,addEmpleado,updateEmpleado,listClienteByFolioZA,listClienteByFolioZB,listClienteByFolioZC} = require ("../Controllers/administrador")
const router = Router()

///GET///
router.get("/",listEmpleados)
router.get("/Nombre/:Nombre/",listEmpleadoByNombre)//http://localhost:4000/api/v1/administrador/Nombre/Alejandro
router.get("/Zona_A/:Folio/",listClienteByFolioZA)//http://localhost:4000/api/v1/administrador/Zona_A/1
router.get("/Zona_B/:Folio/",listClienteByFolioZB)//http://localhost:4000/api/v1/administrador/Zona_B/1
router.get("/Zona_C/:Folio/",listClienteByFolioZC)//http://localhost:4000/api/v1/administrador/Zona_C/1

///POST//
router.post("/",addEmpleado)

///PUT//
router.put("/",updateEmpleado)

module.exports=router