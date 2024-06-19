const fs = require('fs');

const escribirArchivoPromesas = (rutaArchivo, contenido) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(rutaArchivo, contenido, (error) => {
            if(error) reject(error)
            else resolve()
        })
    })
}

module.exports = escribirArchivoPromesas;