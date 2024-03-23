// Importo metodo de express  
import { Router }from'express';
import ControladorRegistros from '../controladores/controladorRegistros.js';

const enrutadorRegistros = Router();

enrutadorRegistros.post('/',ControladorRegistros.crearRegistro);
enrutadorRegistros.get('/', ControladorRegistros.leerRegistros);
enrutadorRegistros.get('/:id',ControladorRegistros.leerRegistro);
enrutadorRegistros.put('/:id',ControladorRegistros.actualizarRegistro);
enrutadorRegistros.delete('/:id',ControladorRegistros.eliminarRegistro);

export default enrutadorRegistros