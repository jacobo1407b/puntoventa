import mysql,{Connection} from 'mysql';
import { info,warn} from 'utils/logger';

export var conexion:Connection;

export function connectSQL():void{
    conexion = mysql.createConnection({
        connectTimeout:100800,
        host: process.env.HOSTSQL,
        database: process.env.DBNAME,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        port: parseInt(process.env.PORTSQL!),
    });
    conexion.connect(function (err: any) {
        if (err) {
            setTimeout(connectSQL, 2000); 
            throw err;
        }
        info(`successful MySQL connection with ID ${conexion.threadId}`)
    });
    conexion.on('error', function(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            warn('Reconnecting with MySQL ...')// Connection to the MySQL server is usually
            connectSQL();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
      });
}
