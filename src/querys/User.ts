import { conexion } from 'conect/sqlconnect';
import { client } from 'conect/redis';
import { v4 as uuidv4 } from 'uuid';
import { userdata, responseuser } from 'types';

export function createUser(data: userdata): Promise<responseuser> {
    return new Promise((resolve, reject) => {
        conexion.query('INSERT INTO empleados SET ?', data, function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
    })
}

export function getUserId(id:string|number|null): Promise<userdata | undefined>{
    var sql = "SELECT * FROM empleados WHERE id = ?";
    return new Promise((resolve, reject) => {
        conexion.query({
            sql,
            timeout: 40000,
            values: [id]
        }, function (error, results) {
            if (error) reject(error)
            resolve(results[0])
        });
    });
}

export function getUserEmail(email: string): Promise<userdata | undefined> {
    var sql = "SELECT * FROM empleados WHERE Email = ?";
    return new Promise((resolve, reject) => {
        conexion.query({
            sql,
            timeout: 40000,
            values: [email]
        }, function (error, results) {
            if (error) reject(error)
            resolve(results[0])
        });
    });
}

//redis fron auth
export function setRedis(token: string): string {
    const key = uuidv4();
    client.set(key, token)
    return key
}
export function deleteFromRedis(key:string):void{
    client.del(key)
}

export function getTokenRedis(key: string): Promise<string | null>{
    return new Promise((resolve, reject) => {
        client.get(key, function (err, reply) {
            if (err) {
                reject(err)
            }
            resolve(reply)
        });
    })
}