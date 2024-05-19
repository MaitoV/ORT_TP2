/* ==================== SERVIDOR HTTP NATIVO ======================= */
/*
Http es un protocolo de comunicacion, es el protocolo que usa internet para comunicar los procesos. Esos procesos pueden ser una pagina web, un servicio
Hay otros protocolos como web sockets (comunicacion en tiempo real), ip, tsp (cualquiera de los dos puede hablar, es para redes lan), udp
Http se basa en el modelo cliente - servidor. Esta el proceso cliente que es un proceso activo realiza peticiones que usa el mismo protocolo
¿Porque se usa http para conexiones web? porque son comunicaciones intermitentes que se desconectan y conectan, todos los procesos no estan conectados de forma permanente en internet
se conectan cuando se necesitan y se desconectan cuando dejan de necesitarse. 
*/



// importamos la libreria http - objeto con metodos
const http = require('http');

//El metodo .createServer devuelve un objeto servidor
// Create server tambien recibe un callback que es el que se activa cada vez que un usuario realiza una peticion al servidor. Este callback tiene dos parametros
// el objeto de requerimiento (aue es el objeto que viaja desde el cliente al servidor) y el objeto de respuesta desde el servidor al cliente
// Este callback de req y res se ejecuta con cada peticion http que venga de parte del cliente
const server = http.createServer((req, res) => { // Este callback se le registra al servidor para que cuando se dispare el evento de escucha se llame siempre al callback de req, res
    res.writeHead(200, {'content-type': 'text/html'}); // este metodo permite controlar la metadata como: el estatus, el content-type o el tipo de contenido que el navegador usa para ver como mostrar ese contenido
    res.end('<h1 style="color:red">Hola soy el servidor Http<h1>');
});

const PORT = 8080;
// el objeto server tiene una funcion que es .listen que me permite poner a escuchar el servidor en un puerto
// el segundo parametro es un callaback que se ejecuta si el servidor empezo a escuchar correctamente
// Al poner en marcha un servidor el script nunca se termina, esto se debe a que en la cola siempre queda pendiente el proceso de escuchar .listen
server.listen(PORT, () => console.log('Servidor HTTP escuchando en el puerto ' + PORT))
// el metodo .on de server sirve para configurar un evento que se ejecute cuando ocurre un error
server.on('error', (error) => console.log('Error en servidor ' + error.message))