import express from 'express';
import bodyParser from 'body-parser';
import usrEmpreController from '../controllers/con_empresa.js';
const routerEmpre = express.Router();

routerEmpre.get('/empresa/usuario',usrEmpreController.getusrEmpre);
routerEmpre.use(bodyParser.urlencoded({ extended: true }));
routerEmpre.post('/empresa/usuario', usrEmpreController.createusrEmpre);
routerEmpre.post('/empresa/login',usrEmpreController.login);

routerEmpre.get('/empresa/empresa',usrEmpreController.getEmpresa);
routerEmpre.post('/empresa/empresa',usrEmpreController.createEmpresa);
routerEmpre.get('/empresa',usrEmpreController.getContratos);
routerEmpre.post('/empresa/vacante',usrEmpreController.createVacante);

export default routerEmpre;