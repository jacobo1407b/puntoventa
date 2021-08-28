import {Response,Request} from 'express';

export function auth (req: Request,res:Response){
    res.send('<b>Hola mundo</b>')
}