import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

 async function find(){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    const eventos = await collection.find({}).toArray()
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

async function create(event){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    const evento = await collection.insertOne(event)
    await client.close()
    return evento
}

async function findArray(eventos){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('eventos')
    const e = await collection.find({_id: {$in: eventos.map(e => ObjectId(e.evento_id))}}).toArray()
    await client.close()
    return e
}

export {
    find,
    findByID,
    create,
    findArray
}