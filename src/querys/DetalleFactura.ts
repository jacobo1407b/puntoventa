import { conexion } from 'conect/sqlconnect';
import {facturaDetalles} from 'types';

export default class DetalleFactura {

    getDetalleFacturaId(id:number): Promise<facturaDetalles | undefined>{
        var sql = "SELECT * FROM detallefactura WHERE idFactura=?";
        return new Promise<facturaDetalles>((resolve, reject) => {
            conexion.query({
                sql,
                timeout:40000,
                values:[id]
            },function(err,result){
                if(err)reject(err)
                resolve(result[0])
            })
        })
    }

    deleteFactura(id:number){
        var sql = "DELETE FROM detallefactura WHERE idFactura=?";
        return new Promise<any>((resolve, reject) => {
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

}