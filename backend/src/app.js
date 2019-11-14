// Usa express
const express = require('express');
const app = express();

// cors
const cors = require('cors');

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', require('./routes/users'));
app.use('/tasks', require('./routes/tasks'));
module.exports = app;