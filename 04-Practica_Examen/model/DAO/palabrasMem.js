class ModelMem {
    #palabras;
    constructor() {
        this.#palabras = [
            {id: '1', palabra: "Hola", timestamp: 1624450180112},
            {id: '2', palabra: "que", timestamp: 1624450189685},
            {id: '3', palabra: "tal", timestamp: 1624450195068},
        ]        
    }
    obtenerPalabras = async () => {
        return this.#palabras;
    }
    guardarPalabra = async (palabra) => {
        const id = String(parseInt(this.#palabras[this.#palabras.length - 1]?.id || 0) + 1);
        const timestamp = Date.now();
        const palabraConID = {id: id, ...palabra, timestamp} 
        this.#palabras.push(palabraConID);
        return palabraConID;
    }
}

export default ModelMem;

