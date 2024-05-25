const express = require('express');
const controlador = require('./../controlador/productos.js');

const router = express.Router();

router.get('/:id?', controlador.obtenerProductos);
router.post('/', controlador.guardarProducto);
router.put('/:id', controlador.actualizarProducto); 
router.delete('/:id', controlador.borrarProducto);


module.exports = router;

