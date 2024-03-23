
import { Router } from "express";
import controladorImagenes from "../controladores/controladorImagenes.js";

const enrutadorImagenes = Router();
enrutadorImagenes.post('/', controladorImagenes.cargarImagen);

export default enrutadorImagenes; 