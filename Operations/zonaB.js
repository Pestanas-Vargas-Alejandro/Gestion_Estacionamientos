const consutasClientes = {
    queryAddCliente: `
    INSERT INTO Zona_B (
        N_Empleado,
        Placas,
        Marca,
        Modelo,
        Color,
        Cajon,
        Salida,
        Saldo
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `
}

module.exports = consutasClientes