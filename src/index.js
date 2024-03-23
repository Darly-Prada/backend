//console.log("hello works");
`use strick`
import "dotenv/config";
import "./baseDatos.js";
import servidor from "./servidor.js";

const puerto = servidor.get("port");

servidor.listen(puerto,"0.0.0.0",()=>{
  console.log(`Hola desde mi Raiz de mi Api: ${puerto}`);
});
export default servidor;

