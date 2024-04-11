import { Connection } from 'promise-mysql';
import { getConnection } from '../db/connection.js';
import comprobarUsuario from '../models/mod_empre.js';

/* POST / CREATE / CREAR / INSERT */
const createusrEmpre = async (req, res) => { //Crear usuario
  try {
    const { codigo, correo, password } = req.body
    const data = { codigo, correo, password };
    const connection = await getConnection();
    await connection.query('Insert into usr_empre set ?', data);
    res.redirect('/empresa/usuario');
  } catch (error) {
    console.error('Error trying adding new data:', error);
  }
}
const login = (req, res) => { //Login de usuario
  try {
    const { codigo, password } = req.body;
    comprobarUsuario(codigo, password, (error, existe) => {
      if (error) {
        console.error("Failure to verify user", error);
      }
      if (existe) {
        res.redirect('/empresa');
      }
      else {
        res.redirect('/empresa/reg_empresa.html');
        console.log("The user does not exist in the database");
      }
    })
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
const createEmpresa = async (req, res) => { //Crear empresas
  try {
    const { EmpresaID, Nombre, RTN, Direccion, Telefono, CorreoElectronico, Descripcion, codigo } = req.body
    const data = { EmpresaID, Nombre, RTN, Direccion, Telefono, CorreoElectronico, Descripcion, codigo };
    const connection = await getConnection();
    await connection.query('insert into empresa set ?', data)
    res.redirect("/empresa/empresa")
  } catch (error) {
    console.error("Error: ", error);
    res.status(500);
    res.send(error.message)
  }
}
const createVacante = async (req, res) => {//Crear vacante
  try {
    const { VacanteID, EmpresaID, Puesto, Jornada, Descripcion, Lugar, Edad, GradoAcademico, Experiencia, Conocimientos, DisponibilidadViajar, DocumentosRequeridos } = req.body;
    const data = { VacanteID, EmpresaID, Puesto, Jornada, Descripcion, Lugar, Edad, GradoAcademico, Experiencia, Conocimientos, DisponibilidadViajar, DocumentosRequeridos }
    const connection = await getConnection();
    await connection.query("insert into vacante set ?", data)
    res.redirect("/empresa")
  } catch (error) {
    console.error("Error: ", error);
    res.status(500);
    res.send(error.message)
  }
}

/* GET / READ / LEER / SELECT */
const getusrEmpre = async (req, res) => { //Leer los usuarios
  try {
    const connection = await getConnection();
    const result = await connection.query("Select * from usr_empre")
    res.render('empresa/usr_empre.ejs', { resQuery: result })
  } catch (error) {
    console.error('Error:', error);
    res.status(500);
    res.send(error.message);
  }
}
const getEmpresa = async (req, res) => { //Leer las empresas
  try {
    const connection = await getConnection();
    const result = await connection.query('select * from empresa');
    res.render('empresa/empresa.ejs', { resQuery: result });
  } catch (error) {
    res.status(500)
    console.error("error", error);
    res.send(error.message)
  }
}
const getContrato = async (req, res) => { //Leer Contrato
  try {
    const connection = await getConnection();
    const result = await connection.query("select * from contrato");
    res.render('empresa/contratos.ejs',{resQuery:result})
  } catch (error) {
    res.status(500)
    console.error("error", error);
    res.send(error.message)
  }
}
// Exportar el controlador para que pueda ser utilizado en otros archivos
export const methods = {
  getusrEmpre, getEmpresa, getContrato,
  login,
  createusrEmpre, createEmpresa, createVacante
}