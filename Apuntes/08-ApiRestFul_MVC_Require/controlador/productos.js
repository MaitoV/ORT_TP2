const servicio = require('../servicio/productos');

const obtenerProductos = (req, res) => {
    const {id} = req.params;
    const productos = servicio.obtenerProductos(id);
    res.json(productos)
}

const guardarProducto = (req, res) => {
    const producto = req.body;
    const productoGuardado = servicio.guardarProducto(producto);
    res.json(productoGuardado);
}
/*======== PUT - ACTUALIZACION PARCIAL ===================*/
const actualizarProducto = (req, res) => {
    const {id} = req.params;
    const producto = req.body;
    const productoActualizado = servicio.actualizarProducto(id, producto);
    res.json(productoActualizado);
}

const borrarProducto = (req, res) => {
    const {id} = req.params;
    const productoEliminado = servicio.borrarProducto(id);
    res.json(productoEliminado);
}


/*======== PUT -  ACTUALIZACION TOTAL =================== 
app.put('/api/productos/:id', (req, res) => {
    const {id} = req.params;
    const producto = req.body;
    const index = productos.findIndex(producto => producto.id === id);

    if(index != -1) {
        producto.id = id;
        productos.splice(index, 1, producto);
    }
    else {
        producto.id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1); // ?. optional chaining
        productos.push(producto);

        productos.push(producto);
    }
    res.json(producto);
}); */

module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}