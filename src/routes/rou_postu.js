import express from 'express';
import bodyParser from 'body-parser';
import usrPostuController from '../controllers/con_postulante.js';
const routerPostu = express.Router();


routerPostu.get('/postulante/usuario',usrPostuController.getusrPostu);
routerPostu.use(bodyParser.urlencoded({ extended: true }));
routerPostu.post('/postulante/usuario', usrPostuController.createusrPostu);
routerPostu.post('/postulante/login',usrPostuController.login);

routerPostu.get('/postulante/postulante',usrPostuController.getPostulante);
routerPostu.post('/postulante/postulante',usrPostuController.createPostulante);
routerPostu.get('/postulante',usrPostuController.getVacantes);
routerPostu.post('/postulante/contrato',usrPostuController.createContrato);


export default routerPostu;