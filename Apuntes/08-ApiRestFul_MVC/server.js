/* ==================== API REST FUL ======================= */
const express = require('express');
const routerProductos = require('./router/productos.js'); // al usar require debo comenzar con ./ y el archivo puede o no tener extension

const app = express();

app.use(express.json());

app.use('/api/productos', routerProductos);

const PORT = 8080;

const server = app.listen(PORT, () => console.log('Servidor ApiRestFul escuchando en el puerto ' + PORT));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));

