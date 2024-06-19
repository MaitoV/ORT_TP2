import express from 'express';
import Controlador from '../controlador/palabras.js';

class Router {
    constructor() {
        this.router = express.Router();
        this.controlador = new Controlador();
    }
    start() {
        this.router.get('/:id?', this.controlador.obtenerPalabras);
        this.router.post('/', this.controlador.guardarPalabra);
        return this.router;
    }
}


export default Router;

