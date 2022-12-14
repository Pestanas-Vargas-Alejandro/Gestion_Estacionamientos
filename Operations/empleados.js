const consutasEmp = {
    queryloginEmpleados: `SELECT N_Empleado, Contrasena, Status FROM Empleados WHERE N_Empleado = ?`
}

module.exports = consutasEmp