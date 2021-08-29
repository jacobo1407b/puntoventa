import passport from 'passport';
import {Strategy as LocalStrategy } from 'passport-local';
import {Strategy as JwtStrategy, StrategyOptions} from 'passport-jwt';
import {ExtractJwt} from 'passport-jwt';


import Auth from 'services/Auth/Auth';


const auth = new Auth();

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
}, async (email:string, password:string, done) => {
    /**consulta a la bd */
    const user = await auth.getUser(email);
    if (!user) {
        return done(null, false);
    }
    else {
        const match = await auth.checkPassword(password,user.Password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }
}));


let opts:StrategyOptions  = {
    secretOrKey:process.env.SECRET_TOKEN,
    algorithms:['HS256'],
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
}

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    done(null,true)
}));

/**
 *  User.findOne({ _id: jwt_payload.sub })
        .then(data => {
            if (data === null) { //no existe el usuario
                //podríamos registrar el usuario
                return done(null, false);
            }
            else
                return done(null, data);
        })
        .catch(err => done(err, null)) 
 */