import jwt,{JwtPayload} from 'jsonwebtoken';
import {Payload} from 'types';

export default class Token {
    private secretoke:string = process.env.SECRET_TOKEN!;
    private algorithm:string = process.env.ALGORITH!;


    genToken(payload: Payload): string {
        var secretoke = this.secretoke;
        var algorithm = this.algorithm;
        
        const token = jwt.sign(JSON.stringify(payload), secretoke, { algorithm: 'HS256' });
        return token;
    }

    decoded(token:string): string | JwtPayload{
       return jwt.verify(token, this.secretoke);
    }
    

}