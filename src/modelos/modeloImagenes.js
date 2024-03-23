import { Schema,model } from "mongoose";


const esquemaImagen = new Schema(
    {
        nombre: { type: String, required:true},
        imagen: {data:Buffer, cotentType:String},
    },
    { versionKey: false, timestamps: true }
);

export default model("imagen", esquemaImagen);