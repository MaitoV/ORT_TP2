import fs from 'fs';

class ModelFile {
    #nombreArchivo;
    constructor() {
        this.#nombreArchivo = 'productos.json';
    }

    #leerArchivo = async (nombreArchivo) => {
        let productos = [];
        try {
            const productos = JSON.parse(await fs.promises.readFile(nombreArchivo, 'utf-8'));
            return productos
        } catch {}
        return productos;
    }
    #escribirArchivo = async (nombreArchivo, productos) => {
        await fs.promises.writeFile(nombreArchivo, JSON.stringify(productos, null, '\t'));
    }
    
    obtenerProductos = async () => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
        return productos;
    }
    obtenerProducto = async (id) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
        const productoEncontrado = productos.find(producto => producto.id === id);
        return productoEncontrado || {}; 
    }
    guardarProducto = async (producto) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
        const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1);
        const productoConID = {id: id, ...producto} 
        productos.push(productoConID);
    
        await this.#escribirArchivo(this.#nombreArchivo, productos);
    
        return productoConID;
    }
    actualizarProducto = async (id, producto) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
    
        const index = productos.findIndex(producto => producto.id === id);
        if(index != -1) {
            const productoAnterior = productos[index];
            const productoActualizado = {...productoAnterior, ...producto};
            productos.splice(index, 1, productoActualizado);
    
            await this.#escribirArchivo(this.#nombreArchivo, productos);
    
            return productoActualizado;
        } else {
            return {}
        }
    }
    borrarProducto = async (id) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo);
    
        let producto = {};
    
        const index = productos.findIndex(producto => producto.id === id);
        if(index != -1) {
            producto = productos.splice(index, 1)[0];
            await this.#escribirArchivo(this.#nombreArchivo, productos);
        }
    
        return producto;
    }
}


export default ModelFile;