import { ObjectId, MongoClient } from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')

async function findContacts(user_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('contactos')
    const contactos = await collection.find({"user_id": ObjectId(user_id)}).toArray()
    await client.close()
    return contactos
}

async function findContactsBuscar(nombre){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const contactos = await collection.find({"name": {$regex: `^${nombre}`}}).toArray()
    await client.close()
    return contactos
}

async function addContact(user_id, friend_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('contactos')
    const user = await collection.insertOne({"user_id": ObjectId(`${user_id}`), "friend_id": ObjectId(`${friend_id}`)})
    await client.close()
    return user
}

export {
    findContacts,
    findContactsBuscar,
    addContact
}