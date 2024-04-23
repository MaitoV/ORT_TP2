console. log('Inicio del programa')

/* -------------------------------------------------------- */
/* Operaciones asincrónicas anidadas utilizando callbacks */
/* --------------------------------------------------------- */
const powAsyncCb = (a,b, cb) => {
setTimeout( ()=>cb(a**b), 2000)};
// ---› Callback Hell ó infierno de callbacks ó pirámide de la perdición
powAsyncCb(2,2, res => {
    console.log(res)

    powAsyncCb(res,2, res => {
    console. log (res)
        
    powAsyncCb(res,2, res => {
        console. log (res)});
    
    });
})

/* ------------------------------------------------------ */
/* Operaciones asincrónicas anidadas utilizando promesas */
/* ------------------------------------------------------ */
// Las promesas son un mecanismo mediante el cual puedo devolver aquello que aun no tengo. Las promesas tiene 3 estados: pendiente, rechazadas y confirmadas. 
// La promesa me indica que hay que esperar un resultado que aun no se tiene. Una promesa puede terminar de 2 formas o se cumple o se rechaza.
// Una promesa es UN OBJETO con 3 metodos estaticos: .then .catch .finally. Estas funciones estaticas se les pasan un callback al cual se los llama cuando la promesa finaliza
// Este objeto promesa recibe en su constructor un callback llamado ejecutor, este ejecutor callback recibe 2 parametros resolve y reject que tambien son callbacks.
// Cuando la promesa se resulve favorablemente se llama al callback resolve y se le pasa el resultado, cuando se produce un error se llama al callback reject y se le pasa el error 

/* --------------- PROMESAS ANIDADAS CON interfaz Then CATCH -------------------- */
const powAsyncPromise = (a,b) => {
    return new Promise((resolve, reject) => {
        if(typeof a == 'number' && typeof b == 'number') {
            setTimeout(() => resolve(a**b), 2000);
        } else reject('Los parametros son incorrectos')
    });
}

powAsyncPromise(2,2)
.then(resultado => {console.log(resultado)
    return powAsyncPromise(res, 2);
})
.then(resultado => {console.log(resultado)
    return powAsyncPromise(res, 2);
})
.then(resultado => {console.log(resultado)
    return powAsyncPromise(res, 2);
})
.then(resultado => console.log(resultado))
.catch(error => console.log(error)); // Este catch es comun para todas las promesas encadenadas


/* --------------- PROMESAS ANIDADAS CON iINTERFAZ ASYNC AWAIT  -------------------- */
async function calcular() {
    try {
        let res = await powAsyncPromise(2,2);
        console.log(res);
        res = await powAsyncPromise(res,2);
        console.log(res);
        res = await powAsyncPromise(res,2);
        console.log(res);
        res = await powAsyncPromise(res,2);
        console.log(res);

    } catch (error){
        console.log(error.message);
    }
}
calcular()
