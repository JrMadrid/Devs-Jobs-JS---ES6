import express from 'express';
import bodyParser from 'body-parser';
import admonController from '../controllers/con_admin.js';
const routerAdmins = express.Router();
routerAdmins.use(bodyParser.urlencoded({ extended: true }));

/* POST / CREATE / CREAR / INSERT */
routerAdmins.post('/admin', admonController.crearAdmon);

/* GET / READ / LEER / SELECT */
routerAdmins.get('/admin',admonController.getAdmins);

/* PUT / UPDATE / ACTUALIZAR / UPDATE */
/* DELETE / DELETE / BORRAR / DELETE */

export default routerAdmins;
