class ModelMem {
    #productos;
    constructor() {
        this.#productos = [
            {id: '1', nombre: 'tv', precio: 12345.96, stock: 55},
            {id: '2', nombre: 'mesa', precio: 234.32, stock: 23},
            {id: '3', nombre: 'mouse', precio: 1122.56, stock: 456},
        ]        
    }
    obtenerProductos = async () => {
        return this.#productos;
    }
    obtenerProducto = async (id) => {
        const productoEncontrado = this.#productos.find(producto => producto.id === id);
        return productoEncontrado || {}; 
    }
    guardarProducto = async (producto) => {
        const id = String(parseInt(this.#productos[this.#productos.length - 1]?.id || 0) + 1);
        const productoConID = {id: id, ...producto} 
        this.#productos.push(productoConID);
        return productoConID;
    }
    actualizarProducto = async (id, producto) => {
        const index = this.#productos.findIndex(producto => producto.id === id);
        if(index != -1) {
            const productoAnterior = this.#productos[index];
            const productoActualizado = {...productoAnterior, ...producto};
            this.#productos.splice(index, 1, productoActualizado);
            return productoActualizado;
        } else {
            return {}
        }
    }
    borrarProducto = async (id) => {
        let producto = {};
    
        const index = this.#productos.findIndex(producto => producto.id === id);
        if(index != -1) {
            producto = this.#productos.splice(index, 1)[0];
        }
        return producto;
    }
}

export default ModelMem;

