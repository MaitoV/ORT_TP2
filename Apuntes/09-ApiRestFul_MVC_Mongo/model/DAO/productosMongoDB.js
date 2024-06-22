import { ObjectId } from "mongodb"
import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {
    constructor() {}

    obtenerProductos = async () => {
        //if(!CnxMongoDB.connectionOK) return []
        if(!CnxMongoDB.connectionOK) throw new Error('ERROR CNX BASE DE DATOS!!!!')
        const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
        //console.log(productos)
        return productos
    }

    obtenerProducto = async id => {
        if(!CnxMongoDB.connectionOK) return {}
        //console.log(id)
        const producto = await CnxMongoDB.db.collection('productos').findOne({_id: new ObjectId(id)})
        //console.log(producto)
        return producto
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connectionOK) return {}

        //console.log(producto)
        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectionOK) return {}

        await CnxMongoDB.db.collection('productos').updateOne({_id: new ObjectId(id)},{ $set: producto })
        const productoActualizado = await this.obtenerProducto(id)
        return productoActualizado
    }
    
    borrarProducto = async id => {
        if(!CnxMongoDB.connectionOK) return {}

        const productoBorrado = await this.obtenerProducto(id)
        await CnxMongoDB.db.collection('productos').deleteOne({_id: new ObjectId(id)})
        return productoBorrado
    }
}

export default ModelMongoDB