/**
 * toma un array cuyos valores pueden encontrarse repetidos
 * @param {number[]} arrs el array de números que quiero sanitizar
 * @returns {number[]} el nuevo array de valores unicos
 */
module.exports = function obtenerUnArrayDeValoresUnicos(arrs) {
    return Array.from(new Set(arrs));
}