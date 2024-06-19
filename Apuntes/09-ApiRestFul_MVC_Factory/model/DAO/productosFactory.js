import  ModelFile from "./productosFile.js";
import ModelMem from "./productosMem.js";

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                return new ModelMem();
            break;
            case 'FILE':
                return new ModelFile();
            break;
            default: 
                return new ModelMem();
        }
    }
}

export default ModelFactory;