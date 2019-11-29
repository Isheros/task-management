// Usa mongoose para conectarse a mongoDB
const mongoose = require('mongoose');

// Obtiene la direccion de la DB
const URI = process.env.MONGODB_URI;

// Opciones de conexión para mongoose
mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Crea la conexión 
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log('MongoDB conectada')
})