import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function find(id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    const eventos = await collection.find({"id_jugador.idJ": ObjectId(`${id}`)}).toArray()
    await client.close()
    return eventos
}

async function findByID(idEvento){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    const evento = await collection.findOne({_id: ObjectId(idEvento)})
    await client.close()
    return evento
}

async function create(evento){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    await collection.insertOne(evento)
    await client.close()
    return evento
}

export {
    find,
    findByID,
    create
}