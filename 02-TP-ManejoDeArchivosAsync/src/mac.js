const fs = require('fs');
const path = require('path');

try {
    let rutaArchivoLectura = path.join(__dirname,'..','package.json');
    let rutaArchivoEscritura = path.join(__dirname,'..', 'info.txt');

    
    fs.readFile(rutaArchivoLectura, 'utf-8', (error, archivoString) => {
        if(error) throw Error(`Error en lectura asincronica ${error.message}`)
            
            let archivoObjeto = JSON.parse(archivoString);
            let info = {
                contenidoStr: archivoString,
                contenidoObj: archivoObjeto
            }

            fs.stat(rutaArchivoLectura, (error, info) => {
                if(error) throw Error(`Error en lectura asincronica ${error.message}`)

                info.size = info.size;
            })
            console.log(info);
            let infoJSON = JSON.stringify(info);

            fs.writeFile(rutaArchivoEscritura, infoJSON, (error) => {
                if(error) { throw Error(`Error en lectura asincronica ${error.message}`)}
            });
    })

} catch (error) {
    console.log(`ERROR: ${error.message}`)
}
