import { getConnection } from '../db/connection.js';
import bcrypt from 'bcrypt'
async function comprobarUsuario(username, password, callback) {
  const connection = await getConnection(); // Conectar a la base de datos
  const query = 'SELECT * FROM usr_postu WHERE nickname = ?'; // Consulta SQL
  connection.query(query, [username], async (error, results) => {
    if (error) {
      // Manejar el error de la consulta SQL
      console.error('Error ejecutando la consulta SQL:', error);
      return callback(error, null);
    }
    
    // Verificar si se encontraron resultados
    if (results.length > 0) {
      const usuario = results[0]; // Obtener el primer usuario de los resultados
      
      // Obtener el hash de la contraseña almacenada para el usuario
      const hashAlmacenado = results[0].password; // Asegúrate de que el nombre de la columna sea correcto
      
      // Comparar la contraseña proporcionada con el hash almacenado
      bcrypt.compare(password, hashAlmacenado, (error, valid) => {
        if (error) {
          // Manejar el error de comparación de contraseñas
          console.error('Error al comparar las contraseñas:', error);
          return callback(error, null);
        }
        
        if (valid) {
          console.log('Las contraseñas coinciden. Usuario autenticado.');
          return callback(null, usuario);
        } else {
          console.log('Las contraseñas no coinciden. Usuario no autenticado.');
          return callback(null, null);
        }
      });
    } else {
      console.log('El usuario no existe en la base de datos.');
      return callback(null, null);
    }
  });
}

export default comprobarUsuario;