import bcrypt from "bcryptjs";
//import modeloLogueo from "../modelos/modeloLogueo.js";
import modeloRegistro from '../modelos/modeloRegistro.js';
import { generarToken } from "../funciones/token.js";


const controladorLogueo= {
  ingresarUsuario: async (solicitud, respuesta) => {
    console.log(solicitud.body);
    try {
      const { nombre, contrasenia } = solicitud.body;
      const registroEncontrado = await modeloRegistro.findOne({ nombre });
      console.log(registroEncontrado);
      if (registroEncontrado) {
        console.log("linea 15");
        const contraseniaValida = await bcrypt.compare(
          contrasenia,
          registroEncontrado.contrasenia
        ); 
        if (contraseniaValida) {
          console.log("linea 21");
          const token = await generarToken({
            id: registroEncontrado._id,
            nombre: registroEncontrado.nombre,
            correo:registroEncontrado.correo,
          });
          console.log("linea 27");
          respuesta.json({
            resultado: 'bien',
            mensaje: 'token generado',
            datos: token,
          });
        } else {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'Credenciales incorrectas',
            datos: null,
          });
        }
      } else {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'Credenciales incorrectas',
          datos: null,
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
  validarToken: async(solicitud,respuesta)=>{
    try{
      const token = solicitud.params.token
      console.log(token);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'token valido',
        datos:token,
      });

    }
  catch (error) {
    respuesta.json({
      resultado: 'mal',
      mensaje: 'ocurrió un error',
      datos: error,
    })
  }
}
};
export default controladorLogueo;