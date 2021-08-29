import mysql,{Connection} from 'mysql';
import { info } from 'utils/logger';

export var conexion:Connection;
export function connectSQL():void{
    conexion = mysql.createConnection({
        connectTimeout:10800,
        host: process.env.HOSTSQL,
        database: process.env.DBNAME,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        port: parseInt(process.env.PORTSQL!),
    });
    conexion.connect(function (err: any) {
        if (err) {
            throw err;
        }
        info(`successful MySQL connection with ID ${conexion.threadId}`)
    });
}
