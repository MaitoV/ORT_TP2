const fs = require('fs');

const obtenerTamanioArchivoPromesas = (rutaArchivo) => {
    return new Promise((resolve, reject) => {
        fs.stat(rutaArchivo, (error, info) => {
            if(error) reject(error)
            else resolve(info.size)
        })
    })
}

module.exports = obtenerTamanioArchivoPromesas;