import bcrypt from "bcryptjs";
import modeloRegistro from '../modelos/modeloRegistro.js';


// CRUD: Create, Read, Update, Delete => Crear, Leer, Actualizar, Eliminar
// operacion para crear segun el modelo que hemos definido

const controladorRegistros = {
  crearRegistro: async (solicitud, respuesta) => {
    console.log(solicitud.body);
    try {
const {nombre,usuario,contrasenia,correo,disponible}= solicitud.body;
const hashContrasenia = await bcrypt.hash(contrasenia,10);
const nuevoRegistro = new modeloRegistro({
    nombre,
    usuario,
    contrasenia:hashContrasenia,
    correo,
    disponible,
  });
const registroCreado = await nuevoRegistro.save();
    console.log(registroCreado)
      if (registroCreado) {
        respuesta.json({
          resultado: 'Bienvenido/a',
          mensaje: 'Registro creado',
          datos: registroCreado,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },

  // leer regalos creamos el metodo con su funcion y se ejecuta el bloque 
  // que deseamos ejecutar try catch 
  // llama el metodo find, lo guardo en una constante y respondo con un json.  
  leerRegistros: async (solicitud, respuesta) => {
    try {
      const todosLosRegistros = await modeloRegistro.find();
      respuesta.json({
        resultado: 'bien',
        mensaje: 'todos los registros',
        datos: todosLosRegistros,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  // leer el dato segun el metodo find pero con el id de un solo dato. 
  leerRegistro: async (solicitud, respuesta) => {
    try {
      const registro = await modeloRegistro.findById(solicitud.params.id);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'registro leido',
        datos: registro._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  actualizarRegistro: async (solicitud, respuesta) =>{
    try{
      const actualizado = await modeloRegistro.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'registro actualizado',
        datos: actualizado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  eliminarRegistro: async (solicitud, respuesta) => {
    try {
      const eliminado = await modeloRegistro.findByIdAndDelete(
        solicitud.params.id
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'registro eliminado',
        datos: eliminado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
};
export default controladorRegistros;