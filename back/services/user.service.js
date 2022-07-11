import { ObjectId, MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'


const client = new MongoClient('mongodb://127.0.0.1:27017')

async function findByID(user_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const user = await collection.findOne({_id: ObjectId(user_id)})
    return {...user, pass: undefined}
}

async function create(user){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const userOld = await collection.findOne({mail: user.mail})
    if(!userOld){
        const salt = await bcrypt.genSalt(10)
        const passHash = await bcrypt.hash(user.pass, salt)
        user.pass = passHash
        const result = await collection.insertOne(user)
        return {...user, _id: result.insertedId}
    } else {
        throw new Error({ "message" : 'El usuario ya existe'})
    }
}

async function login({mail, pass}){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const userDB = await collection.findOne({mail})
    if(userDB){
        const isMatch = await bcrypt.compare(pass, userDB.pass)
        if(isMatch){
            return {...userDB, pass: undefined}
        } else {
            throw new Error('Contraseña incorrecta')
        }
    } else {
        throw new Error('El usuario no existe')
    }    
}

async function findAllContacts(friend_ids){
    let ids = []
    for (let i = 0; i < friend_ids.length; i++) {
        const f = new ObjectId(friend_ids[i]);
        ids.push(f)
    }
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const users = await collection.find({"_id": {$in: ids}}).toArray()
    let contacts = []
    users.map(user => {
        contacts.push({...user, pass: undefined})
    })
    return contacts
}

async function findAllPlayers(user_ids){
    let ids = []
    for (let i = 0; i < user_ids.length; i++) {
        const f = new ObjectId(user_ids[i]);
        ids.push(f)
    }
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const jugadores = await collection.find({"_id": {$in: ids}}).toArray()
    let players = []
    jugadores.map(user => {
        players.push({...user, pass: undefined})
    })
    return players
}

export {
    findAllPlayers,
    findAllContacts,
    findByID,
    create,
    login
}

