import express from 'express';
import {auth,work,logout} from 'controllers';
import {middlewares} from 'middlewares/auth';
const router = express.Router();

router.post('/',auth);
router.get('/',middlewares.ensureAuthenticated,work);
router.get('/logout',middlewares.ensureAuthenticated,logout);

export default router;