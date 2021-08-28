import express from "express";
import {config} from 'config'
import {info} from 'utils/logger';
import loader from 'middlewares/loaders';

const app = express();
const port = config.HOST;

loader();

app.get( "/", ( req, res ) => {
    res.send( "index" );
} );

app.listen( port, () => {
    info(`Server started at http://localhost:${ port }`)
} );