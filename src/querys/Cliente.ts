import { conexion } from 'conect/sqlconnect';
import { clientedata } from 'types';

export function getClientUser(userid: number): Promise<clientedata[] | null | undefined> {
    var sql = "SELECT * FROM cliente WHERE usuario_id = ?";
    return new Promise((resolve, reject) => {
        conexion.query({
            sql,
            timeout: 40000,
            values: [userid]
        }, function (error, result) {
            if (error) reject(error)
            resolve(result)
        })
    })
}

export function createClient(data:clientedata):Promise<unknown>{
    return new Promise((resolve,reject)=>{
        conexion.query('INSERT INTO cliente SET ?',data,function(err,result){
            if(err) reject(err)
            resolve(result)
        });
    })
};

export function updateClient(data:clientedata,idClient:string){
    return new Promise((resolve,reject)=>{
        conexion.query('UPDATE cliente SET ? WHERE idcliente=?',[data, idClient],function(
            err,
            result
        ){
            if(err)reject(err)
            resolve(result)
        })
    })
}

export function deleteClient(id:number){
    var sql = "DELETE FROM cliente WHERE idcliente=?";
    return new Promise((resolve,reject)=>{
        conexion.query({
            sql,
            timeout: 40000,
            values: [id]
        },function(err,result){
            if(err)reject(err)
            resolve(result)
        })
    });
}
