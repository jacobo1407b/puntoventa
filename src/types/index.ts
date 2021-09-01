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
    email: string,
    role:number
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
export type clientedata = {
    idcliente: null | number,
    RFC?:string,
    nombre:string,
    telefono:string,
    direccion?:string,
    dateadd:number|Date,
    usuario_id?:number
}

export type compradata={
    idcompra:null | number,
    codproducto:number//recibe id del producto
    fecha:number | Date,
    cantidad:number,
    precio:number,
    usuario_id:number
}

export type facturaDetalles={
    idFactura:number,
    nofactura:number,
    uuid:string
    Producto:number,
    cantidad:number,
    Preciototal:number
}