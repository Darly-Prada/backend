// Importamos Express de la web
import express from 'express';
import cors from "cors";
import morgan from "morgan"; 
import enrutadorRegistros from './rutas/rutaRegistros.js';
import enrutadorLogueo from "./rutas/rutaLogueo.js";
import enrutadorImagenes from './rutas/rutaImagenes.js';
import enrutadorProducto from "./rutas/rutaApi.js";

const servidor = express();
const puerto = process.env.PUERTO;

 
// ruta de los registros import 
servidor.set('port', puerto);

servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use("/logueo/" ,enrutadorLogueo)
servidor.use("/registros/",enrutadorRegistros);
servidor.use("/imagenes",enrutadorImagenes );
servidor.use("/productos/",enrutadorProducto);


// hago la peticion 

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ message: 'HELLO WORKS, Servidor ejecutandose desde la Raiz!' });
});

export default servidor;