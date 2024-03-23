import bcrypt from "bcryptjs";
import modeloProducto from "../modelos/modeloApi.js";


const controladorProducto = {
    crearProducto: async (solicitud, respuesta)=>{
            try{
                delete solicitud.body._id
                const nuevoProducto = new modeloProducto(solicitud.body);
                const productoCreado = await nuevoProducto.save();
                console.log(productoCreado)
            //    if (productoCreado._id){
                    respuesta.json({
                        resultado: "Está bien",
                        mensaje: "Has creado un Producto",
                        datos: productoCreado,
                    });
              //  }
            } catch (error){
                respuesta.json({
                    resultado: "salio mal", 
                    mensaje: "Hay un error para crear", 
                    datos:error,
                });
            }
    },
    leerProductos: async(solicitud, respuesta)=>{
    try{
        const todosLosProductos = await modeloProducto.find();
        respuesta.json({
            resultado: "Está bien",
            mensaje: "Todos los Productos son:",
            datos: todosLosProductos,
        });        
    } catch (error){
            respuesta.json({
                resultado: "salio mal", 
                mensaje: "Hay un error para leer", 
                datos: null,
            });
        }
    },
    leerProducto: async(solicitud, respuesta)=>{
        try{
            const producto = await modeloProducto.findById(solicitud.params.id);
            respuesta.json({
                resultado: "Está bien",
                mensaje: "Producto leido",
                datos: producto._id,
            });        
        } catch (error){
                respuesta.json({
                    resultado: "salio mal", 
                    mensaje: "Hay un error para leer Producto", 
                    datos:null,
                });
            }
        },
        actualizarProducto: async(solicitud, respuesta)=>{
            try{
                const actualizarProducto = await modeloProducto.findByIdAndUpdate(
                    solicitud.params.id,
                    solicitud.body
                );
                respuesta.json({
                    resultado: "Está bien",
                    mensaje: "Producto actualizado",
                    datos: actualizarProducto
                });        
            } catch (error){
                    respuesta.json({
                        resultado: "salio mal", 
                        mensaje: "Hay un error para actualizar", 
                        datos:null,
                    });
                }
            },
            eliminarProducto: async(solicitud, respuesta)=>{
                try{
                    const id = solicitud.params.id
                    console.log("prueba" , id)
                    const eliminarProducto = await modeloProducto.findByIdAndDelete(id);
                    console.log(eliminarProducto);
                    respuesta.json({
                        resultado:"Está bien",
                        mensaje: "Producto eliminado",
                        datos: eliminarProducto._id,
                    });        
                } catch (error){
                        respuesta.json({
                            resultado:"salio mal", 
                            mensaje:"Hay un error para eliminar", 
                            datos:error,
                        });
                    }
                },
            };    
        export default controladorProducto;

