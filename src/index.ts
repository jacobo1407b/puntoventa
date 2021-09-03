import express from "express";
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import createRouter from "routes";
import passport from "passport";
import { config } from 'config';
import { info } from 'utils/logger';
import loader from 'middlewares/loaders';
import { middlewares } from 'middlewares/auth';

const app = express();

loader();
//settings
app.set('port', config.HOST);
app.set('json spaces', 2);
//middlewares
app.use(helmet());
app.use(cors());
app.use(cookieParser('QWERTYU'));
app.use(morgan('dev'));
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