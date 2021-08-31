import {Response,Request,NextFunction} from 'express';
import {Payload,userdata,RequestCustom} from 'types';
import passport from 'passport';
import Token from 'services/Token/Token';
import User from 'services/Auth/Auth';
import error_types from 'config/error_types';

var tokenclass = new Token();
var userservice = new User()

export function auth (req: Request,res:Response,next:NextFunction){
    passport.authenticate('local',{session:false},function(err,user:userdata,inf){
        if(err || !user){
            next(new error_types.Error404("username or password not correct."));
        }else{
            const payload:Payload = {
                sub:user.id,
                exp:Date.now()+40000,
                username:user.Usuario,
                email:user.Email,
                role:user.Rol
            }
            var key = tokenclass.setKeyRedis(tokenclass.genToken(payload));
            user.Password = "";
            res.cookie('key',key);
            res.status(200).json({
                error:false,
                key,
                user
            })
        }
    })(req, res, next);
}

export async function work(expressRequest: Request,res:Response){
    const req = expressRequest as RequestCustom;
    var user = await userservice.getUserById(req.user.sub);
    user!.Password="";
    const key = req.cookies.key;
    res.status(200).json({key,user})
}

export function logout(req: Request,res:Response){
    const key:string = req.cookies.key;
    userservice.deleteSession(key);
    res.clearCookie('key')
    res.status(200).json({key:"",user:null});
}