import express, { Request, NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import createRouter from "routes";
import passport from "passport";
import { config } from 'config';
import { info } from 'utils/logger';
import loader from 'middlewares/loaders';
import { middlewares } from 'middlewares/auth';
import timeout from 'connect-timeout';

const app = express();

loader();
//settings
function haltOnTimedout(req: Request, res: any, next: NextFunction) {
    if (!req.timedout) next()
}
app.set('port', config.HOST);
app.set('json spaces', 2);
//middlewares
app.use(haltOnTimedout)
app.use(cookieParser());
app.use(timeout(`2s`))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

//rutas
createRouter(app);
//err

app.use(middlewares.errorHandler);
app.use(middlewares.notFoundHandler);

app.listen(app.get('port'), () => {
    info(`Server started at http://localhost:${app.get('port')}`)
});