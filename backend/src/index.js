// Para el entorno
require('dotenv').config();

// Obtiene las conf en app y la conexion a la DB
const app = require('./app');
require('./database')

// Conecta el servidor
async function main(){
    await app.listen(app.get('port'));
    console.log('Servidor en puerto',app.get('port'));
}


main();