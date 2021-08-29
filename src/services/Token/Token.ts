import jwt,{JwtPayload} from 'jsonwebtoken';
import {Payload} from 'types';
import {setRedis,getTokenRedis} from 'querys/User';

export default class Token {

    genToken(payload: Payload): string {      
        const token = jwt.sign(JSON.stringify(payload), process.env.SECRET_TOKEN!, { algorithm: 'HS256' });
        return token;
    }

    decoded(token:string): string | JwtPayload{
       return jwt.verify(token, process.env.SECRET_TOKEN!);
    }

    setKeyRedis(token:string):string{
        var key = setRedis(token);
        return key
    }
    private async getTokenFromRedis(key:string):Promise<string | null>{
        return await getTokenRedis(key)
    }

    async getTokenUser(key:string): Promise<string | JwtPayload | null>{
        if(!key){
            return null;
        }
        var token = await this.getTokenFromRedis(key)
        var userdata = this.decoded(token!)
        return userdata;
    }
}