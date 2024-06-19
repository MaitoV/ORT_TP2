const fs = require('fs');
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
        try {
            return fs.readFileSync(ruta, 'utf-8');
        }
        catch(error) {
            console.error('Error de lectura - La ruta del archivo no es valida o el archivo no existe');
        }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try {
        let existeLaRuta = fs.existsSync(ruta);
        if(!existeLaRuta) {
            throw new Error('El directorio proporcionado no existe');
        }
        
        let esUnDirectorio = (fs.statSync(ruta)).isDirectory();
        
        if(esUnDirectorio && shouldCreateIfNotExists) {
           let rutaConNombreArchivo = `${ruta}/${new Date().toString()}`;
            fs.writeFileSync(rutaConNombreArchivo, texto);
        } else throw new Error('El archivo no existe');
    } catch(error) {
        console.error(error.message);
    }
}

// exportar ambas funciones
module.exports = {
    leerArchivoComoString,
    escribirTextoEnArchivo
}