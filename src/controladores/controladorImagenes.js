import multer from "multer";
import modeloImagenes from "../modelos/modeloImagenes.js";

const controladorImagenes = {
    cargarImagen: async (solicitud, respuesta)=>{
 try{
    const storage = multer.diskStorage({
        destination: "imagenes",
        filename:(solicitud,file,cb)=>{
        cb(null,file.originalname);
        },
   });
   const carga = multer ({storage:storage}).single("archivo_subido");
   console.log("workks")
   carga (solicitud,respuesta, async(error)=>{
    if (error) {
        respuesta.json({
            resultado: 'mal',
            mensaje: 'error para cargar imagen',
            datos: error,
    });            
    } else {
        const nuevaImagen = new modeloImagenes(
            {
                nombre: solicitud.body.nombre,
                imagen: {
                    data:solicitud.body.filename,
                    cotentType:"image/png",
            },
            });
            const resp =await nuevaImagen.save();
            respuesta.json({
                reultado: "bien",
                mensaje: "imagen cargada",
                datos: resp,
        });
   }
   });
 }  catch(error){
    respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
    });
 } 
},
};

export default controladorImagenes;