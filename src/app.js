import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';  //El módulo 'path' proporciona utilidades para trabajar con rutas de archivos y directorios en Node.js. 
import myconnection from 'express-myconnection'
import session from 'express-session'


const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* Importar Router */
import routerPostu from './routes/rou_postu.js'
import routerEmpre from './routes/rou_empre.js';
// import routerAdmins from './routes/rou_admins.js';
/*rutas*/
// app.use(routerAdmins);
app.use('/empresa',routerEmpre);
app.use('/postulante',routerPostu);

/* MIDDLEWARES */
app.set('views', path.join(__dirname, 'views'));// Configuración para renderizar vistas EJS
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.json())

app.use((req, res, next) => {// Middleware para manejar direcciones no especificadas
  if (!req.route) { // Verificar si no hay una ruta coincidente
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); // Enviar el archivo 404.html
  } else {
      next(); // Pasar al siguiente middleware si hay una ruta definida
    }
  });
  
  export default app;