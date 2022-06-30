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

async function findParticipantes(evento_id, cantidad){
    console.log('%cparticipantes.service.js line:15 cantidad', 'color: #007acc;', cantidad);
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const contactos = await collection.find({"evento_id": ObjectId(evento_id), estado: 1}).limit(parseInt(cantidad)).sort({updated_at: 1}).toArray()
    console.log('%cparticipantes.service.js line:20 contactos', 'color: #007acc;', contactos);
    await client.close()
    return contactos
}

async function participacion(evento_id, user_id, estado){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('participantes')
    const eventos = await collection.findOneAndUpdate(
        { evento_id: ObjectId(evento_id), user_id: ObjectId(user_id) },
        { $set: { estado: estado } },
        { returnOriginal: false }
    )
    await client.close()
    return eventos
}

export {
    find,
    findParticipantes,
    participacion
}