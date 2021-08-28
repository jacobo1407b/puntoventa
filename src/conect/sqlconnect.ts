import mysql from 'mysql';
import { info } from 'utils/logger';

export default function connectSQL():void{
    var conexion = mysql.createConnection({
        connectTimeout:8800,
        host: process.env.HOSTSQL,
        database: process.env.DBNAME,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        port: parseInt(process.env.PORTSQL!),
    });

    conexion.connect(function (err: any) {
        if (err) {
            console.log(err)
            return;
        }
        info(`successful MySQL connection with ID ${conexion.threadId}`)
    });
}
