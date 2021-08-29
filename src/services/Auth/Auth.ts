import { matchPassword, encryptPassword} from 'utils/hash';
import {userdata} from 'types';
//import { v4 as uuidv4 } from 'uuid';
import {getUserEmail,getUserId,deleteFromRedis} from 'querys/User';
import Token from 'services/Token/Token';

//var token = new Token();

export default class Auth extends Token {
    /**
     * login
     */

    public async getUser(email: string): Promise<userdata | undefined> {
        return await getUserEmail(email);
    }

    public async getUserById(id:string | number | null):  Promise<userdata | undefined>{
        return await getUserId(id);
    }
    /**
     * auth
     */

    public async checkPassword(password: string, hash: string): Promise<boolean> {
        return await matchPassword(password, hash);
    }
    public async encrypt(password:string):Promise<string>{
       return await encryptPassword(password)
    }
    public decodeToken(token: string) {
        return this.decoded(token)
    }
    //logout
    public deleteSession(key:string):void{
        deleteFromRedis(key)
    };
}