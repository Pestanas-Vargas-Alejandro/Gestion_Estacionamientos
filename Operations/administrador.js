const consutasAdmin = {
    queryListEmpleados:"SELECT * FROM Empleados",
    queryListEmpleadoByNombre: `SELECT * FROM Empleados WHERE Nombre = ?`,
    queryEmpleadoExists: `SELECT Nombre FROM Empleados WHERE Nombre = ?`,
    queryAddEmpleado: `
    INSERT INTO Empleados (
        Status,
        Zona,
        Contrasena,
        Nombre,
        APaterno,
        AMaterno
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    queryInfoEmpleado: `
    SELECT Status,Zona,Nombre,APaterno,AMaterno
    FROM Empleados 
    WHERE Nombre = ?
    `,
    queryUpdateEmpleado: `
    UPDATE Empleados SET
        Status = ?,
        Zona = ?,
        APaterno = ?,
        AMaterno = ?
    WHERE Nombre = ?
    `,
    queryListClienteByFolioZA: `SELECT * FROM Zona_A WHERE Folio = ?`,
    queryListClienteByFolioZB: `SELECT * FROM Zona_B WHERE Folio = ?`,
    queryListClienteByFolioZC: `SELECT * FROM Zona_C WHERE Folio = ?`,
}

module.exports = consutasAdmin