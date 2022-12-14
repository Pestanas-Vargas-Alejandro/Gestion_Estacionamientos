const consutasClientes = {
    queryAddCliente: `
    INSERT INTO Zona_A (
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