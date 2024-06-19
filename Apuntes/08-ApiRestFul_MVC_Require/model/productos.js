const productos = [
    {id: '1', nombre: 'tv', precio: 12345.96, stock: 55},
    {id: '2', nombre: 'mesa', precio: 234.32, stock: 23},
    {id: '3', nombre: 'mouse', precio: 1122.56, stock: 456},
]

const obtenerProductos = () => {
    return productos;
}
const obtenerProducto = (id) => {
    const productoEncontrado = productos.find(producto => producto.id === id);
    return productoEncontrado || {}; 
}
const guardarProducto = (producto) => {
    const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1);
    const productoConID = {id: id, ...producto} 
    productos.push(productoConID);
    return productoConID;
}
const actualizarProducto = (id, producto) => {
    const index = productos.findIndex(producto => producto.id === id);
    if(index != -1) {
        const productoAnterior = productos[index];
        const productoActualizado = {...productoAnterior, ...producto};
        productos.splice(index, 1, productoActualizado);
        return productoActualizado;
    } else {
        return {}
    }
}
const borrarProducto = (id) => {
    let producto = {};

    const index = productos.findIndex(producto => producto.id === id);
    if(index != -1) {
        producto = productos.splice(index, 1);
    }
    return producto;
}


module.exports = {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}