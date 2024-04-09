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
const login = (req, res) => {
  try {
    const { nickname, password } = req.body;
    comprobarUsuario(nickname, password, (error, existe) => {
      if (error) {
        console.error("Failure to verify user", error);
      }
      if (existe) {
        res.json({ message: "Funciono" }) // cambiar cuando se cree la ruta de vacante
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
/* GET / READ / LEER / SELECT */
const getusrPostu = async (req, res) => { // Leer los usuarios de los postulantes
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usr_postu");
    res.render('postulante/usr_postu.ejs', { resQuery: result });
  } catch (error) {

  }
}
/* PUT / UPDATE / ACTUALIZAR / UPDATE */
/* DELETE / DELETE / BORRAR / DELETE */


// Exportar el controlador para que pueda ser utilizado en otros archivos
export const methods = {
  getusrPostu,
  login,
  createusrPostu
}