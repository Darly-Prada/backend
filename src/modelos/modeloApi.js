import { Schema, model } from "mongoose";

const esquemaProducto =new Schema(
    {
        nombre:{type:String,required:true}, // nombre del producto
        tipo:{type:String,required:true}, // tipo de material: pastilla, barra, burbuja 
        codigo:{type:String,required:true},  // cambiar por un codigo que vaya aumentando 1
        disponible: {type:Boolean,required:true}, // equivale si hay inventario 
    },
    { versionKey: false, timestamps:true}
   
);
export default model("producto", esquemaProducto);
