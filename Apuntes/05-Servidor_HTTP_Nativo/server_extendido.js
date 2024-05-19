/* ==================== SERVIDOR HTTP NATIVO ======================= */

const http = require('http');
const fs = require('fs');


const server = http.createServer(async (req, res) => { 
    /* ======== DESTRUCTURING OBJET ============= */
    let {url, method} = req; // destructuring objet -> toma los valores de esas propiedades del objeto y las almacena en variables, para que esto funcione las claves deben
    // llamarse igual que las propiedades a desestructurar, caso contrario deberemos usar alias
    const {url: ruta, method:metodo} = req; // aca usamos alias
    
    if(metodo == 'GET') {
        if(url == '/') {
            const INDEX =  'public/index.html';
            try {
                const PAGE = await fs.promises.readFile(INDEX, 'utf-8');
                res.writeHead(200, {'content-type': 'text/html'}); 
                res.end(PAGE);
                return;
            } catch (error) {
                res.writeHead(404, {'content-type': 'text/html'}); 
                res.end(`<h1 style="color:red"> Recurso ${INDEX} no encontrado <h1>`);
                return;
            }
        }
        if(url == '/mensaje') {
            res.writeHead(200, {'content-type': 'text/html'}); 
            res.end('<h1>Hola soy el servidor Http<h1>');
        }
        else if(url == '/time') {
            res.writeHead(200, {'content-type': 'text/html'}); 
            res.end(`<h1 style="color:red">La fecha y hora actual es ${new Date().toLocaleString()} <h1>`);
        }
        else {
            res.writeHead(404, {'content-type': 'text/html'}); 
            res.end(`<h1 style="color:red">ERROR ruta ${ruta} no implementada <h1>`);
        }
    } else {
        res.writeHead(500, {'content-type': 'text/html'}); 
        res.end(`<h1 style="color:red">ERROR de metodo HTTP ${metodo} en la ruta ${ruta} <h1>`);
    }
});

const PORT = 8080;

server.listen(PORT, () => console.log('Servidor HTTP escuchando en el puerto ' + PORT))

server.on('error', (error) => console.log('Error en servidor ' + error.message))