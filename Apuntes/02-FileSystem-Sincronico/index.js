const fs = require('fs'); // CommonJS {"type": "commonjs" -> en package.json }
// import fs from 'fs' - ES Modules {"type": "module" -> en package.json}

//Leyendo un archivo de forma sincronica / bloqueante, es decir que hasta que el archivo no se lea no se va a continuar con la ejecuccion de la siguiente sentencia
try {
    let datos = fs.readFileSync('./archivo.txt','utf-8')//.toString();
    console.log(datos)
    fs.writeFileSync('./archivo.txt', new Date().toLocaleString())
    console.log('write ok'); // todo estos procesos estan bloqueando el event loop
    console.log('------------- otras tareas ---------------')

} catch(error) {
    console.log(`Error en la operacion sincronica de lectura/ escritura: ${error.message}`)
}
