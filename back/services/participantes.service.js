import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function find(user_id) {
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const eventos = await collection.find({ user_id: ObjectId(user_id) }).toArray()
    await client.close()
    return eventos
} 

async function findByEventId(evento_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const participantes = await collection.find({ evento_id: ObjectId(evento_id) }).sort({updated_at : -1}).toArray()
    await client.close()
    return participantes
}

async function insertUTE(evento_id, user_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const eventos = await collection.insertOne({ evento_id: evento_id, user_id: ObjectId(user_id), estado: 1, updated_at: new Date() })
    await client.close()
    return eventos
}

async function participacion(evento_id, user_id, estado){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const eventos = await collection.findOneAndUpdate(
        { evento_id: ObjectId(evento_id), user_id: ObjectId(user_id) },
        { $set: { estado: estado , updated_at: new Date()} },
        { returnOriginal: false }
    )
    await client.close()
    return eventos
}

async function addContactToEvent(evento_id, user_id, estado){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const eventos = await collection.insertOne({ 
        evento_id: ObjectId(evento_id), 
        user_id: ObjectId(user_id),
        estado: estado, 
        updated_at: new Date() 
    })
    await client.close()
    return eventos
}

export {
    find,
    insertUTE,
    findByEventId,
    participacion,
    addContactToEvent
}