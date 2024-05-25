const modelo = require('./../model/productos');

const obtenerProductos = (id) => {
    if(id) {
        const productoEncontrado = modelo.obtenerProducto(id);
        return productoEncontrado;
    }
    else {
        const productos = modelo.obtenerProductos();
        return productos;
    }
}

const guardarProducto = (producto) => {
    const productoGuardado = modelo.guardarProducto(producto);
    return productoGuardado;
}

const actualizarProducto = (id, producto) => {
    const productoActualizado = modelo.actualizarProducto(id, producto);
    return productoActualizado;
}

const borrarProducto = (id) => {
    const productoBorrado = modelo.borrarProducto(id);
    return productoBorrado;
}


module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}