import express from "express";
import createRouter from "routes";
import useMiddleware from "middlewares";
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
useMiddleware(app);
//rutas
createRouter(app);
//err
app.use(middlewares.errorHandler);
app.use(middlewares.notFoundHandler);

app.listen(app.get('port'), () => {
    info(`Server started at http://localhost:${app.get('port')}`)
});