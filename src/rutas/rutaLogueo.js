import { Router } from "express";
import controladorLogueo from "../controladores/controladorLogueo.js";

const enrutadorLogueo = Router();

enrutadorLogueo.post('/', controladorLogueo.ingresarUsuario);

enrutadorLogueo.get("/:token",controladorLogueo.validarToken);

export default enrutadorLogueo; 