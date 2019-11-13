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
app.get('/users', (req,res) => res.send('User Routes'));
app.get('/notes', (req,res) => res.send('Notes Routes'));
module.exports = app;