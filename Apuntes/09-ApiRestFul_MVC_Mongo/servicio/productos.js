import ModelFactory from '../model/DAO/productosFactory.js';
import config from '../config.js';

class Servicio {
    constructor() {
        //this.modelo = new ModeloFile()
        //this.modelo = new ModelMem()
        this.modelo = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerProductos = async (id) => {
        if(id) {
            const productoEncontrado = await this.modelo.obtenerProducto(id);
            return productoEncontrado;
        }
        else {
            const productos = await this.modelo.obtenerProductos();
            return productos;
        }
    }
    
    guardarProducto = async (producto) => {
        const productoGuardado = await this.modelo.guardarProducto(producto);
        return productoGuardado;
    }
    
    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.modelo.actualizarProducto(id, producto);
        return productoActualizado;
    }
    
    borrarProducto = async (id) => {
        const productoBorrado = await this.modelo.borrarProducto(id);
        return productoBorrado;
    }
    
}

export default Servicio;


