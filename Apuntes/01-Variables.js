/* =====================================================================
================================= VARIABLES ============================= 
*/

var num = 5;
var num = 10; // permite redefinirla sin problemas
/* var -> no respeta bloques de codigo y es de caracter global */
for(var i = 0; i < 5; i++) {

}
console.log(i); // No respeta la asignacion local de i porque tiene caracter global

/* let -> es local al bloque de codigo al que pertenece, fuera de su bloque de codigo no existe*/
for(let j = 0; j < 5; j++) {}
//console.log(j); //ACa j no existe porque let respeta los bloqes de codigo

/* const -> su valor no puede cambiar, su valor debe ser asignado al momento de definir la variable */

const PI = 3.14;

/************* COMO ACTUAN LAS VARIABLES EN DIFERENTES BLOQUES DE CODIGO ********************** */
// BLOQUE FUNCIONAL
// Var solo funciona bien dentro de los bloque de codigo funcional actuando como variable local
console.log('******************************* VAR **********************')
function varTest() {
    var x = 31;
        //Bloque conficionales (if/for)
        if(true) {
            var x = 71;
        }
    console.log(x);
        // Bloque de codigo anonimo -> se usa para aislar codigo que se ejecuta todo junto
        {
            var x = 111;
            console.log(x);
        }
        console.log(x);
}
varTest();
//console.log(x); -> da error porque aca si nrespeta el bloque funcional
console.log('******************************* LET **********************') //Let respeta todos los bloques de codigo
function letTest() {
    let x = 31;
        //Bloque conficionales (if/for)
        if(true) {
            let x = 71;
        }
    console.log(x);
        // Bloque de codigo anonimo -> se usa para aislar codigo que se ejecuta todo junto
        {
            let x = 111;
            console.log(x);
        }
        if(true) {
            console.log(x); //Como aca no redefini su valor x vale lo mismo que en el bloque de codigo padre
        }
     console.log(x);
}
letTest();

/* ======================= TIPADO ==================================== */
// El tipado es como le digo a las raviables que tipo de datos van a almacenar
// Tipado en JS/ES es dinamico y debil

var nombre = 'Pepe' // dinámico
console. log(nombre, typeof nombre)
nombre = -123.45 // debil
console. log (nombre, typeof nombre)


/* ========================= FUNCIONES ============================ */
//Funcion nomal
function suma(a,b) {
    return a+b
}
// Funcion flecha -> las variables que guardan funciones anonimas debe ser constantes para que no puedan ser declaradas nuevamente
const suma = (a,b) => a + b;

const getPersona = _ =>  ({nombre: "juan", edad: 23});

/* ================== CLASES - FUNCIONES CONSTRUCTORAS ======================== */
// Js es un lenguaje orientado a objetos pero sus objetos son prototipos
// Las clases de js no permiten: herencia, clases abstractas, no permite interfaces, no permite la visibilidad (esto si permite TS)
class Timer {
    contador = 0;
    //Las propiedades se pueden declarar, en esta seccion antes del constructor, 
    constructor(cont) {
        this.contador = cont;
    }
    getContador() { // es igual que getContador = function () { }
        this.contador;
    }
    //El this en javascript cambia y depende del contexto de ejecuccion de la funcion
    setTimer (ms) {
        /* setInterval(function() { 
        console. log(this) //Aca tengo problemas con el this, porque este this no hace refencia al contexto de la clase si no al contexto de la funcion setInterval
        console. log(++this.contador)
        }, ms)*/
    
    setInterval((function() {
        console. log (this) 
        console. log(++this.contador)
        }).bind(this), ms) // Aca cambiamos el contexto de ejecuccion de una funcion con otra funcion

    //Las arroy function solucionan este problema de manera nativa sin el bind
    // El this de la arrow function depende del contexto de creacion de la arrow
    setInterval(() => {
        console. log (this) 
        console. log(++this.contador)
    }, ms)
    /* RESUMEN - EL THIS FUNCIONA DISTINTO EN LAS ARROW FUNCTIONS QUE EN LAS FUNCIONES */
       // - EN LAS FUNCIONES el this es dinamico y depende del contexto de ejecuccion
       // - EN LAS ARROW FUNCTIONS el this depende de del contexto de creacion de la funcion 
    }
}
const timer1 = new Timer(50);


