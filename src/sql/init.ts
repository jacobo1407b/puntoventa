import { readFileSync } from 'fs';
import {error,info} from 'utils/logger';
import {conexion,connectSQL} from 'conect/sqlconnect';
import { config } from 'dotenv';
import {isDev} from 'config';

const buildPath = !isDev ? 'build/' : '';
const initDb = readFileSync(buildPath + 'src/sql/venta.sql', 'utf8');

config();
connectSQL();

setTimeout(function(){
    conexion.query(initDb,(err:Error)=>{
        if(err){
            error(err)
        }else{
            info('Database inited')
        }
    })
},5000)