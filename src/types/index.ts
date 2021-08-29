import {Request} from 'express';



export type loginReq = {
    error: boolean,
    msg: string,
    data: null | undefined | string
}

export type Payload = {
    sub: string | number | null,
    exp: number | Date,
    username: string,
    email: string
}
export interface RequestCustom extends Request
{
    user: Payload;
}
export interface ErrorCustom {
    name: string
    message: string
    stack?: string
}
export type userdata = {
    id: null | number,
    Nombre: string,
    url?: string,
    nameImage?: string,
    ApellidoPaterno: string,
    ApellidoMaterno: string,
    Telefono: string,
    Direccion?: string,
    Email: string,
    Usuario: string,
    Password: string,
    Rol: number
}
export type responseuser = {
    fieldCount: number,
    affectedRows: number,
    insertId: number,
    serverStatus: number,
    warningCount: number,
    message: string,
    protocol41: boolean,
    changedRows: number
}