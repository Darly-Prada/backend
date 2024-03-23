import { Schema, model } from 'mongoose';

const esquemaLogueo = new Schema(
  {
    nombre: { type: String, required: true },
    contrasenia: { type: String, required: true }
    //usuario: { type: String, required: true }, //correo:{type:String, required:true},
  },
  { versionKey: false, timestamps: true }
);

export default model('Logueo', esquemaLogueo);