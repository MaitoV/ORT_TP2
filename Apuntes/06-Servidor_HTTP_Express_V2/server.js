const express = require('express');

// devuelve un objeto que es una instancia de express, que contiene el servidor http nativo y otras funcionalidades
const app = express();

const controladorRutaDefault = (req, res) => {
    const {url, method} = req;
    res.status(500).send(`Error en la ruta ${method} : ${url} no implementada`);
}
/* =========== DEFINIENDO EL SERVICIO DE ARCHIVOS ESTATICOS  ================== 
=============================================================================== */
app.use(express.static('public')); // registramos el middleware con la ruta relativa a la carpeta de recursos estaticos
// Este middleware evaluara si posee el recurso estatico que se esta solicitando via get, si posee el recurso en la carpeta public hara un res.sendFile() directo desde el middleware
// tambien puedo configurar a que ruta sirve cada carpeta estatica, ejemplo
app.use('/productos', express.static('public/productos'));

/* =========== DEFINIENDO RUTAS O ENDPOINTS GET ================== 
=============================================================================== */

// Definiendo una ruta con express
//metodo para crear un metodo get http, primer parametro ruta a definir en el servidor, segundo parametro un callback que es un controlador de ruta
app.get('/', (req, res) => {
     // .sendFile() Metodo que ofrece express para enviar archivos sin importar la libreria fs manualmente
    // El .sendFile() debe recibir un path absoluto -> que deberia poner el path empezando desde la carpeta raiz de la pc
    /* ======== como obtener una ruta absoluta ========================
        2 FORMAS: __dirname (solo sirve para commonjs es decir para require y process.cwd() sirve para require y para import (commonjs y module */
    // __dirname sirve unicamente para commonjs, no sirve para module
    //console.log(__dirname) //me da la ruta relativa abstoluta de la carpeta en la que se encuentra nuestro archivo
    // Lo que sirve tanto para require como import es process.cwd();
    res.sendFile(process.cwd() + '/views/index.html');
})
app.get('/time', (req, res) => {
    res.send(`<h1 style="color:green">Son las ${new Date().toLocaleString()}</h1>`);
})
//Este metodo sirve para el resto de las rutas que no estan creadas arriba, se ejecuta este
// Esta ruta por default debe colocarse AL FINAL de todas las rutas
app.get('*', controladorRutaDefault)
/* =========== DEFINIENDO RUTAS O ENDPOINTS POST ==================
=============================================================================== */
app.post('*', controladorRutaDefault)
/* =========== DEFINIENDO RUTAS O ENDPOINTS PUT ==================
=============================================================================== */
app.put('*',controladorRutaDefault)
/* =========== DEFINIENDO RUTAS O ENDPOINTS DELETE ==================
=============================================================================== */
app.delete('*', controladorRutaDefault)

const PORT = 8080;

//metodo para poner en marcha el servidor y que se quede escuchando, se le pasa como segundo argumento un callback para cuando el servidor este listo
// app.listen devuelve el objeto servidor nativo de http
const SERVER = app.listen(PORT, () => console.log('Servidor Express escuchando en puerto ' + PORT));
// metodo de http nativo para cuando el servidor da error
SERVER.on('error', (error) => console.log('Error en servidor ' + error.message));