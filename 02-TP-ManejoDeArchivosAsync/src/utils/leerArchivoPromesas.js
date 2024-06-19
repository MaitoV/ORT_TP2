const fs = require('fs');

const leerArchivoPromesas = (rutaArchivo) => {
    return new Promise((resolve, reject) => {
        fs.readFile(rutaArchivo, 'utf-8', (error, info) => {
            if(error) reject(error)
            else resolve(info)
        });
    })
}

module.exports = leerArchivoPromesas;