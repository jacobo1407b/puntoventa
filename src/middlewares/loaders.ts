import { config } from 'dotenv';
import {isDev} from 'config';
import {infovariante} from 'utils/logger';
import connectRedis from 'conect/redis';
import connectSQL from 'conect/sqlconnect';

export default function initLoader():void {
    if(isDev){
        infovariante('Starting development server...')
        config();
    }
    connectSQL();
    connectRedis();
}