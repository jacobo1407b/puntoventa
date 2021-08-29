import Auth from './Auth';
import { connectRedis } from 'conect/redis';
import { connectSQL, conexion } from 'conect/sqlconnect';
import { config } from 'dotenv';
import { getUserEmail} from 'querys/User';
const auth = new Auth();

config();
connectRedis();
connectSQL();

setTimeout(after, 8000)
async function after() {
   getUserEmail('test@test.com').then((response)=>{
      console.log(response)
   }).catch(err=>console.log(err))
}
