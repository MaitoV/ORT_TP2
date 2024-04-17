const {leerArchivoComoString} = require('./src/utils/fileUtils');
const {transformarStringEnArrayDeNumeros} = require('./src/utils/transformUtils');
const {combinarDosArrays, combinarNArrays} = require('./src/apareo');

// leo los 4 archivos a memoria
let archivoA = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let archivoB = leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let archivoC = leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let archivoD = leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

// preparo los 4 arrays a partir de los archivo leidos
archivoA = transformarStringEnArrayDeNumeros(archivoA, ',');
archivoB = transformarStringEnArrayDeNumeros(archivoB, ',');
archivoC = transformarStringEnArrayDeNumeros(archivoC, ',');
archivoD = transformarStringEnArrayDeNumeros(archivoD, ',');

// combino los primeros dos arrays
let arraysCombinados = combinarDosArrays(archivoA, archivoB);

// combino los cuatro arrays
arraysCombinados.push(archivoC);
arraysCombinados.push(archivoD);
let multiplesArraysCombinados = combinarNArrays(arraysCombinados);
console.log(multiplesArraysCombinados);




