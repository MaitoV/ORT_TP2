const path = require('path');
const leerArchivoPromesas = require('./utils/leerArchivoPromesas');
const obtenerTamanioArchivoPromesas = require('./utils/obtenerTamanioArchivoPromesas');
const escribirArchivoPromesas = require('./utils/escribirArchivoPromesas');

    let rutaArchivoLectura = path.join(__dirname,'..','package.json');
    let rutaArchivoEscritura = path.join(__dirname,'..', 'info.txt');

    
    leerArchivoPromesas(rutaArchivoLectura)
    .then((archivoString) => {
        let archivoObjeto = JSON.parse(archivoString);
        let objetoArchivo = obtenerTamanioArchivoPromesas(rutaArchivoEscritura)
                                .then((tamanioArchivo) => {
                                    return {
                                        contenidoStr: archivoString,
                                        contenidoObj: archivoObjeto,
                                        size: tamanioArchivo
                                    }
                                })

        return objetoArchivo;
    })
    .then((info) => {
        console.log(info);
        let infoJSON = JSON.stringify(info);

        return escribirArchivoPromesas(rutaArchivoEscritura, infoJSON);
    })
    .catch((error) => {
        console.log(`ERROR: ${error.message}`)
    })
