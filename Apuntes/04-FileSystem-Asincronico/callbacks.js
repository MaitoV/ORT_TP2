/* -------------------------------------------------------------------------------------- */
/*                  CALBBACKS SINCRONICOS - Se ejecutan sin retardo de ejecuccion        */
/* ------------------------------------------------------------------------------------ */

/* ---------------------------------------------------- */
/*                  Operacion sin callbacks             */
/* ---------------------------------------------------- */
function operaciones(a,b,op) { //Funcion fuertemente acoplada a la operacion que le paso por parametro
    switch(op) {
        case 'suma': return a + b;
        case 'resta': return a - b;
        case 'mult': return a * b;
        case 'div': return a / b;
        default: `Operacion "${op}" no definida`;
    }
}
const n1= 6, n2 = 3;

console.log(operaciones(n1,n2,'resta'));

/* ---------------------------------------------------- */
/*                  Operacion con callbacks             */
/* ---------------------------------------------------- */
//Un callback es una funcion que se le pasa a otra funcion como parametro y va a ser ejecutada/llamada en la funcion que la recibe
// HERRAMIENTA IDEAL  para bajar el acoplamiento y modularizar.
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const multi = (a,b) => a * b;
const div = (a,b) => a / b;

function operacion(a, b, cb) {
    if(typeof cb != 'function') return `El callback ${cb} no es una funcion`;
    else return cb(a,b);
}

console.log( operacion(n1,n2,div) );
console.log( operacion(n1,n2,'xx') );

/* -------------------------------------------------------------------------------------- */
/*                  CALBBACKS ASINCRONICOS    */
/* ------------------------------------------------------------------------------------ */
console.log('Inicio del delay ', new Date().toLocaleString());
// La funcion setTimeout, recibe un callback y lo ejecuta despues de que se cumple x cantidad de milisegundos, es una funcion que se ejecuta a futuro
setTimeout(() => console.log('Fin del delay ', new Date().toLocaleString()), 2000);
console.log('otras tareas');


// Generadores en Javascript -
function* fgGetMensaje() {
    yield 'Hola'
    yield 'Mundo'
    return 'fin'
    }
    const getMensaje = fgGetMensaje()
    console.log( getMensaje.next() )
    console.log( getMensaje.next() )
    console.log( getMensaje.next() )

    function* fgGetRandom () {
        while(true) { // aunque el ciclo sea infinito, no bloquea el event loop de node
        yield Math.random() 
        }
    }
    const getRandom = fgGetRandom();
    console.log(getRandom.next());