/* -------------------------------------------------------- */
/*     READ / WRITE FILE SYSTEM ASINCRONICO (no bloqueante) */
/* -------------------------------------------------------- */
const fs = require('fs');

function readWriteFsAsync() {
    try {
        console.log('Inicio del programa');
        // el .readFile -> es asincronico no espera que finalice su ejecuccion para continuar leyendo y como tercer parametro se le pasa un callback, que recibe dos parametros un error y los datos 
        // El asincronismo no tiene un orden, el orden se lo tenemos que establecer nosotros, el asincronismo solo asegura que no bloquemos el event look

        /* ----------------- ASINCRONISMO SIN ORDEN ------------------- */
        /*fs.readFile('./datos.txt', 'utf-8', (error, datos) => { 
            if(error) { throw Error(`Error en lectura asincronica ${error.message}`)}
            console.log(datos)
        })

        fs.writeFile('./datos.txt', new Date().toLocaleString(), (error) => { 
            if(error) throw Error(`Error en escritura asincronica ${error.message}`)
            console.log('write ok');
        })

        fs.readFile('./datos.txt', 'utf-8', (error, datos) => { 
            if(error) { throw Error(`Error en lectura asincronica ${error.message}`)}
            console.log('Lectura despues de escribir ', datos)
        })*/

        /* ----------------- ASINCRONISMO CON ORDEN ------------------- */
        // Los callbacks anidados, si bien evitan que el event loop se cuelgue y se ejecuten en orden, tambien produce anidamiento de codigo y el callback hell
        fs.readFile('./datos.txt', 'utf-8', (error, datos) => { 
            if(error) { throw Error(`Error en lectura asincronica ${error.message}`)}
            console.log(datos);

            fs.writeFile('./datos.txt', new Date().toLocaleString(), (error) => { 
                if(error) throw Error(`Error en escritura asincronica ${error.message}`);
                console.log('write ok');

                fs.readFile('./datos.txt', 'utf-8', (error, datos) => { 
                    if(error) { throw Error(`Error en lectura asincronica ${error.message}`)}
                    console.log('Lectura despues de escribir ', datos)
                })
            })
        })

    } catch(error) {
        console.log(`ERROR: ${error.message}`);
    }
}

readWriteFsAsync();

console.log('Otras Tareas ----------------------');