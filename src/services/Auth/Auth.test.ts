import Auth from './Auth';
import {connectRedis} from 'conect/redis';
import {config} from 'dotenv'
const auth = new Auth();

config()
connectRedis()

setTimeout(after,8000)
function after(){
   auth.auth('bbd574f9-fc52-4d30-bb78-15d2e5694727')
}
