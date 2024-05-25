/* ==================== API REST FUL ======================= */
const express = require('express');

const app = express();

app.use(express.json());

const productos = [
    {id: '1', nombre: 'tv', precio: 12345.96, stock: 55},
    {id: '2', nombre: 'mesa', precio: 234.32, stock: 23},
    {id: '3', nombre: 'mouse', precio: 1122.56, stock: 456},
]

/* ================== GET =================== */
app.get('/api/productos/:id?', (req, res) => {
    const {id} = req.params;

    if(id) {
        const productoEncontrado = productos.find(producto => producto.id === id);
        res.json(productoEncontrado || {}); // SHORT CIRCUIT OPERATOR
        /* SHORT CIRCUIT OPERATOR: este operador resuelve un conflicto entre 2 valors que compiten por ocupar una posicion. Estos dos valores estan compitiendo
        por ser devuelvos al cliente, el operador evalua de izquierda a derecha que valor es TRUTHSY, es decir que valor es convertible a TRUE. Si contiene un valor
        diferente de undefined, null, de 0 o de un string vacio es TRUTHSY y por lo tanto es devuelto
        */
    }
    else res.json(productos)
});
/* ================== POST =================== */
app.post('/api/productos', (req, res) => {
    const producto = req.body;
    const id = String(parseInt(productos[productos.length - 1]?.id || 0) + 1); // ?. optional chaining
    const productoConID = {id: id, ...producto} // spread operator

    productos.push(productoConID);
    res.json(productoConID);
});
/* ================== PUT =================== */
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
/*======== PUT - ACTUALIZACION PARCIAL ===================*/
app.put('/api/productos/:id', (req, res) => {
    const {id} = req.params;
    const producto = req.body;

    const index = productos.findIndex(producto => producto.id === id);
    if(index != -1) {
        const productoAnterior = productos[index];
        // ...spread operator + object merge
        // productoAnt = { id: "2", nombre: "Mesa", precio: 234.32, stock: 23 }
        // producto = { "precio": 400.22 }
        // ---› productoAct = { ... productoAnt, ... producto }
        // 1) { ...{ id: "2", nombre: "Mesa", precio: 234.32, stock: 23 }, ...{ "precio": 400.22 } }
        // 2) { id: "2" ', nombre: "Mesa" , precio: 234.32, stock: 23 , "precio": 400.22 } // --> Spread Operator
        // 3) { id: "2" , nombre: "Mesa" , precio: 400.22, stock: 23 } // --> Spread Operador
        const productoActualizado = {...productoAnterior, ...producto};
        productos.splice(index, 1, productoActualizado);
        res.json(productoActualizado);
    } else {
        res.json({})
    }
}); 
/* ================== DELETE =================== */
app.delete('/api/productos/:id', (req, res) => {
    const {id} = req.params;
    let producto = {};

    const index = productos.findIndex(producto => producto.id === id);
    if(index != -1) {
        producto = productos.splice(index, 1);
    }
    res.json(producto);
});

const PORT = 8080;

const server = app.listen(PORT, () => console.log('Servidor ApiRestFul escuchando en el puerto ' + PORT));

server.on('error', (error) => console.log('Error en servidor: ' + error.message));

