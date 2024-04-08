import mysql from "promise-mysql";
import config from "./config.js";

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
	host:config.host,
  database:config.database,
  user:config.user,
  password:config.password, // Contraseña de tu base de datos
	port: 3306, // Puerto de MySQL
	connectTimeout: 10000 // Opcional: tiempo de espera de la conexión
});

// Conecta a la base de datos
connection.connect((error) => {
	if (error) {
		console.error('Error al conectar a la base de datos:', error.message);
	} else {
		console.log('Conexión exitosa a la base de datos');
	}
});

export default  connection;