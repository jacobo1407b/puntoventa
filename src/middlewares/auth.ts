import { Request, Response, NextFunction } from 'express';
import Token from 'services/Token/Token';
import error_types from "config/error_types";
import passport from "passport";

var tok = new Token();
export let middlewares = {
    ensureAuthenticated: async (req: Request, res: Response, next: NextFunction) => {
        const userdata = await tok.getTokenUser(req.cookies.key)
        passport.authenticate("jwt", { session: false }, (err) => {

            if (err) {
                return next(err);
            }
            if (!userdata) {
                return next(new error_types.Error403("no tienes acceso."));
            }
            req.user = userdata;
            next();
        })(req, res, next);
    },

    errorHandler: (error: any, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof error_types.InfoError)
            res.status(200).json({ error: error.message });
        else if (error instanceof error_types.Error404)
            res.status(404).json({ error: error.message });
        else if (error instanceof error_types.Error403)
            res.status(403).json({ error: error.message });
        else if (error instanceof error_types.Error401)
            res.status(401).json({ error: error.message });
        else if (error.name == "ValidationError")
            //de mongoose
            res.status(200).json({ error: error.message });
        else if (error.message) res.status(500).json({ error: error.message });
        else next();
    },
    notFoundHandler: (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({ error: 'Not found' })
    },
};
