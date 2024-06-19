import express from 'express';
import Controlador from '../controlador/productos.js';

class Router {
    constructor() {
        //lo que necesito inicializar
        this.router = express.Router();
        this.controlador = new Controlador();
    }
    start() {
        this.router.get('/:id?', this.controlador.obtenerProductos);
        this.router.post('/', this.controlador.guardarProducto);
        this.router.put('/:id', this.controlador.actualizarProducto); 
        this.router.delete('/:id',this.controlador.borrarProducto);
        return this.router;
    }
}


export default Router;

