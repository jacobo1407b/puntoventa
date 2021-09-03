import { compradata } from 'types';
import { conexion } from 'conect/sqlconnect';


export function getComprasAll(): Promise<compradata[]> {
    var sql = "SELECT * FROM compras";
    return new Promise<compradata[]>((resolve, reject) => {
        conexion.query({
            sql,
            timeout: 40000,
        }, function (error, result) {
            if (error) reject(error)
            resolve(result)
        })
    })
}


export function createCompra(data: compradata): Promise<unknown> {
    return new Promise((resolve, reject) => {
        conexion.query('INSERT INTO compras SET', data, function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
    })
}

export function editCodProduct(cod: number, id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        conexion.query('UPDATE compras SET codproducto=? WHERE idcompra=?', [cod, id], function (err, result) {
            if (err) reject(err)
            resolve(result)
        });
    })
}

export function updatePrecioCantidad(precio: number, cantidad: number, id: number) {
    return new Promise<any>((resolve, reject) => {
        conexion.query('UPDATE compras SET cantidad=? precio=? WHERE idcompra=?', [cantidad, precio, id], function (err, result) {
            if (err) reject(err)
            resolve(result)
        });
    })
}

export function deleteCompra(id: number): Promise<any> {
    var sql = "DELETE FROM compras WHERE idcompra=?";
    return new Promise<any>((resolve, reject) => {
        conexion.query({
            sql,
            timeout: 40000,
            values: [id]
        }, function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
    });
}


/**
 * conexion.query('INSERT INTO empleados SET ?', data, function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
 */