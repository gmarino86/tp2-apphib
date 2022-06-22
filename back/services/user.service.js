import { ObjectId, MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'


const client = new MongoClient('mongodb://127.0.0.1:27017')

// async function find(){
//     await client.connect()
//     const db = client.db('armaelequipo')
//     const collection = db.collection('user')
//     const eventos = await collection.find({}).toArray()
//     await client.close()
//     return eventos
// }

async function findByID(idJ){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const user = await collection.findOne({_id: ObjectId(idJ)})
    await client.close()
    return user
}

async function create(user){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const userOld = await collection.findOne({mail: user.mail})
    if(!userOld){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.pass, salt)
    
        const userNew = {
            ...user,
            pass: hash
        }

        await collection.insertOne(userNew)
        await client.close()
        return user
    } else {
        throw new Error('El usuario ya existe')
    }
}

async function login({mail, pass}){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    // const userDB = await collection.findOne({mail, pass})
    const userDB = await collection.findOne({mail})
    await client.close()
    if(userDB){
        const isMatch = await bcrypt.compare(pass, userDB.pass)
        if(isMatch){
            return userDB
        } else {
            throw new Error('Contraseña incorrecta')
        }
    } else {
        throw new Error('El usuario no existe')
    }    
}


export {
    // find,
    findByID,
    create,
    login
}