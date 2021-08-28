

export type loginReq ={ 
    error:boolean,
    msg:string,
    data:null | undefined | string
}

export type Payload = {
    sub: string | number,
    exp: number | Date,
    username:string,
    email:string
}
export interface ErrorCustom {
    name: string
    message: string
    stack?: string
}