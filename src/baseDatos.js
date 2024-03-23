// importar mongoose desde la web
// importo la ruta desde mi perfil en mongodb

import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_ATLAS)
  .then((dato) => console.log('Feliz, Conectado la base de datos.'))
  .catch((error) =>
    console.log("No se ha conectado a la Base de Datos")
  );
  