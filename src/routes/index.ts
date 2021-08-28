import {Application} from 'express';
import auth from './auth.router';

const apiv:string ="/api/v1";

function createRouter(app:Application){
    app.use(`${apiv}/auth`,auth)
}

export default createRouter;