import express from 'express';
import bodyParser from 'body-parser';
import admonController from '../controllers/con_admin.js';
const routerAdmins = express.Router();

routerAdmins.get('/admin',admonController.getAdmins);
routerAdmins.use(bodyParser.urlencoded({ extended: true }));
routerAdmins.post('/admin', admonController.crearAdmon);

export default routerAdmins;
