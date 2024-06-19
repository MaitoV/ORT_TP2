const ordenarArrayNumerico = require('./ordenamiento');
const obtenerArrayValoresUnicos = require('./utils/obtenerArrayValoresUnicos');
/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let arrayCombinado = arrA.concat(arrB);
    arrayCombinado = ordenarArrayNumerico(arrayCombinado);
    let arrayValoresUnicos = obtenerArrayValoresUnicos(arrayCombinado);
    return arrayValoresUnicos;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let arraysCombinados = arrs.flat(Infinity);
    arraysCombinados = ordenarArrayNumerico(arraysCombinados);
    arrayValoresUnicos = obtenerArrayValoresUnicos(arraysCombinados);
    return arrayValoresUnicos;
}

// exportar ambas funciones
module.exports = {
    combinarDosArrays,
    combinarNArrays
}