import { Router } from "express";
import controladorProducto from "../controladores/controladorApi.js";

const enrutadorProducto = Router();

enrutadorProducto.post("/",controladorProducto.crearProducto);
enrutadorProducto.get("/",controladorProducto.leerProductos);
enrutadorProducto.get("/:id",controladorProducto.leerProducto);
enrutadorProducto.put("/:id",controladorProducto.actualizarProducto);
enrutadorProducto.delete("/:id",controladorProducto.eliminarProducto);


export default enrutadorProducto;





