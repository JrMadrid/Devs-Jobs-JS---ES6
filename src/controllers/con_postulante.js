import { getConnection } from '../db/connection.js';
import comprobarUsuario from '../models/mod_postu.js';

/* POST / CREATE / CREAR / INSERT */
const createusrPostu = async (req, res) => { // Crear un nuevo usuario para postulantes
  try {
    const { nickname, correo, password } = req.body;
    const data = { nickname, correo, password };
    const connection = await getConnection();
    await connection.query('INSERT INTO usr_postu SET ?', data)
    res.redirect('/postulante/usuario')
    // res.json({message: `user ${nickname} has been added`})
    console.log(data);
  } catch (error) {
    console.error('Error trying adding new data:', error);
  }
}
const login = (req, res) => { //Login de usuario
  try {
    const { nickname, password } = req.body;
    comprobarUsuario(nickname, password, (error, existe) => {
      if (error) {
        console.error("Failure to verify user", error);
      }
      if (existe) {
        res.redirect('/postulante');
      }
      else {
        res.redirect('/postulante/reg_postulante.html');
        console.log("The user does not exist in the database");
      }
    })
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
const createPostulante = async (req, res) => { //Crear Postulante
  try {
    const { NumeroIdentidad, Nombres, Apellidos, CorreoElectronico, telefono, FechaNacimiento, Sexo, Direccion, Estadop, Area, Descripcion, Nickname } = req.body;
    const data = { NumeroIdentidad, Nombres, Apellidos, CorreoElectronico, telefono, FechaNacimiento, Sexo, Direccion, Estadop, Area, Descripcion, Nickname }
    const connection = await getConnection();
    await connection.query('INSERT INTO postulante set ?', data);
    res.redirect('/postulante/postulante');
  }
  catch (error) {
    res.status(500);
    console.error('Error trying adding new data:', error);
  }
}
const createContrato = async (req, res) => { //crear Contrato
  try {
    const { ContratoID, VacanteID, NumeroIdentidad, TipoContrato, FechaInicio, FechaVencimiento, Horario, Sueldo, DiasLaborales, DiasVacaciones, Departamento } = req.body;
    const data = { ContratoID, VacanteID, NumeroIdentidad, TipoContrato, FechaInicio, FechaVencimiento, Horario, Sueldo, DiasLaborales, DiasVacaciones, Departamento }
    const connection = await getConnection();
    await connection.query('INSERT INTO contrato set ?', data);
    res.redirect('/postulante');
  } catch (error) {
    res.status(500);
    console.error('Error trying adding new data:', error);
  }
}
/* GET / READ / LEER / SELECT */
const getusrPostu = async (req, res) => { // Leer los usuarios de los postulantes
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usr_postu");
    res.render('postulante/usr_postu.ejs', { resQuery: result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
const getPostulante = async (req, res) => { //Leer los postulantes
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from postulante");
    res.render('postulante/postulante.ejs', { resQuery: result })
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
const getVacantes = async (req, res) => { //Leer las vacantes formadas por las empresas
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from vacante");
    res.render('postulante/vacantes.ejs', { resQuery: result })
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
/* PUT / UPDATE / ACTUALIZAR / UPDATE */
const updateUsr_Postu = async (req, res) => {
  try {

  } catch (error) {
    
  }
}
/* DELETE / DELETE / BORRAR / DELETE */


// Exportar el controlador para que pueda ser utilizado en otros archivos
export const methods = {
  getusrPostu, getPostulante, getVacantes,
  login,
  createusrPostu, createPostulante, createContrato
}