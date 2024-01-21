// Importaciones
const express = require('express');
const ejs = require('ejs');
const http = require('http');
const logger = require('morgan');


// Crear el objeto de servidor
const app = express();
const server = http.createServer(app);

// Configuración 
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middlewares
// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./build/public'));
app.set('view engine', 'ejs');

// Ejecución del servidor
server.listen(3000, () => {
    console.log('Servidor ejecutandose en el puerto 3000');
});

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});