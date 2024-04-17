const esArrayNumerico = require('./utils/esArrayNumerico');
/**
 * Recibe un array de datos y ordena sus elementos en forma ascendente
 * @param {number[]} arra un array de números desordenados
 * @returns {number[]} un nuevo array de números ordenados
 */

function ordenarArrayNumerico(array) {
    try {
        let esNumerico = esArrayNumerico(array);

        if(!esNumerico) throw new Error('Error de Ordenamiento - No se pudo ordenar correctamente el array, ya que no es númerico');
        
        return array.sort((a, b) => a - b);
    } catch(error) {
        console.error(error.message);
    }
}

module.exports = ordenarArrayNumerico;