import express from 'express';
import {methods as PostulanteControllers} from '../controllers/con_postulante.js';
const routerPostu = express.Router();
import bodyParser from 'body-parser';
routerPostu.use(bodyParser.urlencoded({ extended: true }));

/* POST / CREATE / CREAR / INSERT */
routerPostu.post('/usuario', PostulanteControllers.createusrPostu); // crear usuario
routerPostu.post('/login',PostulanteControllers.login); //login usuario
// routerPostu.post('/postulante/postulante',usrPostuController.createPostulante); //crear postulante
// routerPostu.post('/postulante/contrato',usrPostuController.createContrato); //crear contrato

/* GET / READ / LEER / SELECT */
routerPostu.get('/usuario',PostulanteControllers.getusrPostu);
// routerPostu.get('/postulante/postulante',usrPostuController.getPostulante);
// routerPostu.get('/postulante',usrPostuController.getVacantes);

/* PUT / UPDATE / ACTUALIZAR / UPDATE */
/* DELETE / DELETE / BORRAR / DELETE */


export default routerPostu;