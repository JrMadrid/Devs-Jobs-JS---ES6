// constantes que voy a obtener atraves de variables de entorno 
import {config} from "dotenv" //permite ejecutar la funcion config ..entrega las variables de entorno

config();

export default{
  host: process.env.HOST ||"" ,
  database:process.env.DATABASE ||"" ,
  user:process.env.USER ||"" ,
  password:process.env.PASSWORD ||"" ,
};