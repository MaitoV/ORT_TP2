const path = require('path');
const leerArchivoPromesas = require('./utils/leerArchivoPromesas');
const obtenerTamanioArchivoPromesas = require('./utils/obtenerTamanioArchivoPromesas');
const escribirArchivoPromesas = require('./utils/escribirArchivoPromesas');

async function leerEscribirArchivosAsincronicamente () {
    let rutaArchivoLectura = path.join(__dirname,'..','package.json');
    let rutaArchivoEscritura = path.join(__dirname,'..', 'info.txt');

    try {
        let archivoString = await leerArchivoPromesas(rutaArchivoLectura)
        let archivoObjeto = JSON.parse(archivoString);
        let tamanioArchivo = await obtenerTamanioArchivoPromesas(rutaArchivoLectura);
        let info = {
            contenidoStr: archivoString,
            contenidoObj: archivoObjeto,
            size: tamanioArchivo
        }
    
        console.log(info);
    
        let infoJSON = JSON.stringify(info)
    
        await escribirArchivoPromesas(rutaArchivoEscritura, infoJSON);
    } catch(error) {
        console.log(error);
    }
}

leerEscribirArchivosAsincronicamente();

    
