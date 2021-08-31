import { config } from 'dotenv';
import {isDev} from 'config';
import {infovariante} from 'utils/logger';
import {connectRedis} from 'conect/redis';
import {connectSQL} from 'conect/sqlconnect';
import {loadCloudinary} from 'conect/cloudinary';

export default function initLoader():void {
    if(isDev){
        infovariante('Starting development server...')
        config();
    }
    require('middlewares/passport');;
    connectSQL();
    connectRedis();
    loadCloudinary();
}