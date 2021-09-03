import { productos } from 'types';
import { conexion } from 'conect/sqlconnect';

export default class Producto {
    getAllProducts(): Promise<productos[] | undefined> {
        var sql = "SELECT * FROM producto";
        return new Promise<productos[]>((resolve, reject) => {
            conexion.query({
                sql,
                timeout: 40000,
            }, function (error, result) {
                if (error) reject(error)
                resolve(result)
            })
        })
    }

    getProductoId(id: number): Promise<productos | undefined> {
        var sql = "SELECT * FROM producto WHERE CodigoP=?";
        return new Promise<productos | undefined>((resolve, reject) => {
            conexion.query({
                sql,
                timeout: 40000,
                values: [id]
            }, function (err, result) {
                if (err) reject(err)
                resolve(result[0])
            })
        })
    }

    updateProducto(id: number, nombre: string, existencia: number, precio: number, proveedor: number, foto: string) {
        var sql: string = "UPDATE producto SET Nombre=? Precio=? Existencia=? Proveedor=? foto=? WHERE CodigoP=?"
        return new Promise<any>((resolve, reject) => {
            conexion.query(sql, [nombre, precio, existencia, proveedor, foto, id], function (err, result) {
                if (err) reject(err)
                resolve(result)
            });
        })
    }

    deleteProducto(id:number){
        var sql = "DELETE FROM producto WHERE CodigoP=?";
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

}