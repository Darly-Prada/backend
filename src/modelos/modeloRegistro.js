import { Schema, model } from 'mongoose';

const esquemaRegistro = new Schema(
  {
    usuario:{ type: String, required: true },
    nombre:{ type: String, required: true },
    contrasenia:{type:String,required:true},
    correo:{type:String, required:true},
 
  },
  { versionKey: false, timestamps: true }
);

export default model('Registro', esquemaRegistro);