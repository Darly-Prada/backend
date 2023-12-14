// Importamos Express de la web

import express from 'express';

// creamos servidor y le indico el puerto 
const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

// hago la peticion 

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ message: 'HELLO WORKS!' });
});

export default servidor;