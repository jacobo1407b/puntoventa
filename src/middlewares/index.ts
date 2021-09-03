import { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors'
import morgan from 'morgan';
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import passport from "passport";

export default function useMiddleware(app: Application) {
    app.use(helmet());
    app.use(cors());
    app.use(cookieParser('QWERTYU'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
}