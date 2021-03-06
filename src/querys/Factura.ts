import { conexion } from 'conect/sqlconnect';
import {factura} from 'types';



    export function getAllFacture(): Promise<factura[] | undefined>{
        var sql = "SELECT * FROM factura";
        return new Promise<factura[]>((resolve, reject) => {
            conexion.query({
                sql,
                timeout:40000
            },function(err,result){
                if(err)reject(err)
                resolve(result)
            });
        })
    }

    export function getFacturaById(id:number): Promise<factura | undefined>{
        var sql = "SELECT * FROM factura WHERE nofactura=?";
        return new Promise<factura>((resolve, reject) => {
            conexion.query({
                sql,
                timeout:40000,
                values:[id]
            },function(err,result){
                if(err)reject(err)
                resolve(result[0])
            }) 
        });
    }

    export function createFactura(data:factura):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            conexion.query('INSERT INTO factura SET',data,function(err,result){
                if(err) reject(err)
                resolve(result)
            })
        });
    }

    export function deleteFactura(id:number){
        var sql = "DELETE FROM factura WHERE nofactura=?";
        return new Promise<void>((resolve, reject) => {
            conexion.query({
                sql,
                timeout:40000,
                values:[id]
            },function(err,result){
                if(err)reject(err)
                resolve(result)
            })
        })
    }
