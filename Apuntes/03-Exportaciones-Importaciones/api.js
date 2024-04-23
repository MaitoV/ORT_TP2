/* ------------------------------------------------------------------------- */
/*  CommonJS {"type": "commonjs" -> en package.json } */
/* ------------------------------------------------------------------------- */
const operaciones = require('./modulos/operaciones-common'); // Esto trae un objeto o sea para que usarlo hago operaciones.suma()

//Usandolo 
operaciones.suma(3,3);



/* ------------------------------------------------------------------------- */
/* ES Modules {"type": "module" -> en package.json} */
/* ------------------------------------------------------------------------- */
// Import default
import operaciones from './modulos/operaciones-module'; 
// Importar todas las funciones por separado (cuando no usamos el default)
import * as operaciones from './modulos/operaciones-common';
// Importar funciones individualmente
import {suma, resta} from './modulos/operaciones-module';

