import {getConnection} from '../db/connection.js';
async function comprobarUsuario(username, password, callback) {
  const connection  = await getConnection();
  const query = 'SELECT * FROM usr_empre WHERE codigo = ? AND password = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      // Manejar el error
      console.error('Error ejecutando la consulta SQL:', error);
      return callback(error, null);
    }
    // Verificar si se encontraron resultados
    const exist = results.length > 0;
    callback(null, exist);
  });
}
export default comprobarUsuario;