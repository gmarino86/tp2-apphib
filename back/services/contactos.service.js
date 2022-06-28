import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function findContacts(idU){
    let contactosArray = []
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('contactos')
    const contactos = await collection.find({id_user: ObjectId(idU)}).toArray()
    await client.close()
    return contactos
}

async function findContactsBuscar(nombre){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const user = await collection.find({name: {$regex : `^${nombre}`, $options: 'si' }}).toArray()
    await client.close()
    return user
}

export {
    findContacts,
    findContactsBuscar
}