// importar mongoose desde la web

import mongoose from 'mongoose';

mongoose

// importo la ruta desde mi perfil en mongodb
  .connect(
    `mongodb+srv://proyectoBit:darly2023@cluster0.xbqgziv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((dato) => console.log('Camino feliz, a la base de datos.'))
  .catch((error) =>
    console.log('Camino triste, no se conecto a la base de datos.')
  );
  