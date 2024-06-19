import express from 'express';
import RouterPalabras from './router/palabras.js';

const app = express();

app.use(express.json());

app.use('/api/palabras', new RouterPalabras().start());

const PORT = 8080;

const server = app.listen(PORT, () => console.log('Servidor ApiRest escuchando en el puerto ' + PORT));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));

