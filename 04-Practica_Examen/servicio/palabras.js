import ModelFactory from '../model/DAO/palabrasFactory.js';
import config from '../config.js';

class Servicio {
    constructor() {
        this.modelo = ModelFactory.get(config.MODO_PERSISTENCIA);
    }

    obtenerPalabras = async () => {
        const palabras = await this.modelo.obtenerPalabras();
        return palabras;
    }
    
    guardarPalabra = async (palabra) => {
        const palabraGuardada = await this.modelo.guardarPalabra(palabra);
        return palabraGuardada;
    }
    
}

export default Servicio;


