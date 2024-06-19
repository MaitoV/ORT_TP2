const fs = require('fs');
const path = require('path');

try {
    let rutaArchivoLectura = path.join(__dirname,'..','package.json');
    let rutaArchivoEscritura = path.join(__dirname,'..', 'info.txt');

    let archivoString = fs.readFileSync(rutaArchivoLectura, 'utf-8');
    let archivoObjeto = JSON.parse(archivoString);
    let tamanioArchivo = fs.statSync(rutaArchivoLectura).size;

    let info = {
        contenidoStr: archivoString,
        contenidoObj: archivoObjeto,
        size: tamanioArchivo
    }
    console.log(info);

    let infoJSON = JSON.stringify(info);
    fs.writeFileSync(rutaArchivoEscritura, infoJSON);

} catch (error) {
    console.log(`ERROR: ${error.message}`)
}
