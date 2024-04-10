import express from 'express';
import {methods as PostulanteControllers} from '../controllers/con_postulante.js';
const routerPostu = express.Router();
import bodyParser from 'body-parser';
routerPostu.use(bodyParser.urlencoded({ extended: true }));

/* POST / CREATE / CREAR / INSERT */
routerPostu.post('/usuario', PostulanteControllers.createusrPostu); //crear usuario
routerPostu.post('/login',PostulanteControllers.login); //login usuario
routerPostu.post('/postulante',PostulanteControllers.createPostulante); //Crear Postulante
routerPostu.post('/contrato',PostulanteControllers.createContrato); //Crear contrato

/* GET / READ / LEER / SELECT */
routerPostu.get('/usuario',PostulanteControllers.getusrPostu); //Leer los usuarios de los postulantes
routerPostu.get('/postulante',PostulanteControllers.getPostulante); //Leer los postulantes
routerPostu.get('/',PostulanteControllers.getVacantes); //Leer las vacantes formadas por las empresas

/* PUT / UPDATE / ACTUALIZAR / UPDATE */
/* DELETE / DELETE / BORRAR / DELETE */


export default routerPostu;