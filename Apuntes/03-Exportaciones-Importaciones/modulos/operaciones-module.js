/* EXPORT MODULE */
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const mult = (a,b) => a * b;
const div = (a,b) => a / b;

export default { // Se exportan todas las funciones juntas
    suma, resta, mult, div
}

// Se exportan cada funcion por separado
export { 
    suma,
    resta, 
    mult
}
/* Seria lo mismo que hacer 
export const suma = (a,b) => a + b;
export const resta = (a,b) => a - b;
export const mult = (a,b) => a * b; */