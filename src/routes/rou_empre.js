import express from 'express';
import {methods as EmpresaControllers} from '../controllers/con_empresa.js';
const routerEmpre = express.Router();
import bodyParser from 'body-parser';
routerEmpre.use(bodyParser.urlencoded({ extended: true }));

/* POST / CREATE / CREAR / INSERT */
routerEmpre.post('/usuario', EmpresaControllers.createusrEmpre); //Crear usuario
routerEmpre.post('/login',EmpresaControllers.login); //Login de usuario
routerEmpre.post('/empresa',EmpresaControllers.createEmpresa); //Crear empresas
routerEmpre.post('/vacante',EmpresaControllers.createVacante); //Crear vacante

/* GET / READ / LEER / SELECT */
routerEmpre.get('/usuario',EmpresaControllers.getusrEmpre); //Leer los usuarios
routerEmpre.get('/empresa',EmpresaControllers.getEmpresa); //Leer las empresas
routerEmpre.get('/',EmpresaControllers.getContrato); //Leer Contrato

/* PUT / UPDATE / ACTUALIZAR / UPDATE */
// routerPostu.PUT('',EmpresaControllers.getusrPostu); //Actualizar los usuarios de las empresas

// routerPostu.delete('',EmpresaControllers.deletePostulante); //Eliminar las empresas
/* DELETE / DELETE / BORRAR / DELETE */

export default routerEmpre;