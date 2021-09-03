import { proveedor } from 'types';
import { conexion } from 'conect/sqlconnect';



    export function getAllProveedor(): Promise<proveedor[] | undefined>{
        var sql = "SELECT * FROM proveedor";
        return new Promise<proveedor[]>((resolve, reject) => {
            conexion.query({
                sql,
                timeout: 40000,
            }, function (error, result) {
                if (error) reject(error)
                resolve(result)
            })
        })
    }

    export function editProveedor(id:number,razon:string,repre:string,tel:string,rfc:string){
        var sql = 'UPDATE proveedor SET Razon=? Representante=? Telefono=? RFC=? WHERE idProveedor=?'
        return new Promise<any>((resolve, reject) => {
            conexion.query(sql, [razon,repre,tel,rfc,id], function (err, result) {
                if (err) reject(err)
                resolve(result)
            });
        })
    }

    export function deleteProveedor(id:number){
        var sql = "DELETE FROM proveedor WHERE idProveedor=?";
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
