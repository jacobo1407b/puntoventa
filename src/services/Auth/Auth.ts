import { matchPassword } from 'utils/hash';
//import { v4 as uuidv4 } from 'uuid';
import Token from 'services/Token/Token';
import { client } from 'conect/redis';

//var token = new Token();

export default class Auth extends Token {
    /**
     * login
     */

    public getUser(email: string) {
        //retornar de bd
        return {
            sub: 1,
            exp: Date.now() + 4000,
            username: "1234567",
            email: email,
            hash:"qwertyui"
        }
    }
    /**
     * auth
     */
    private getRedis(key: string): Promise<string | null> {
        return new Promise((resv, rej) => {
            client.get(key, (err, reply) => {
                if (err) {
                    rej(err)
                }
                resv(reply);
            });
        })
    }
    public async auth(key: string) {
        const values = await this.getRedis(key);
        return values;
    }

    public async checkPassword(password: string, hash: string): Promise<boolean> {
        return await matchPassword(password, hash);
    }

    public decodeToken(token: string) {
        return this.decoded(token)
    }
}