import { ObjectId, MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'


const client = new MongoClient('mongodb://127.0.0.1:27017')

async function findByID(user_id){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('user')
    const user = await collection.findOne({_id: ObjectId(user_id)})
    await client.close()
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
        await client.close()
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
    await client.close()
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

async function getAllUsers(partic){
    if(partic.length > 0){
        let ids = ""
        partic.forEach(element => {
            ids += `ObjectId("${element.user_id}"), `
        });
        console.log('%cuser.service.js line:56 ids', 'color: #007acc;', ids);
        
        await client.connect()
        const db = client.db('armaelequipo')
        const collection = db.collection('user')
        console.log(`collection.find({_id: {$in: [`+ids+`]}}).toArray()` );
        const users = await collection.find({_id: {$in: [ids]}}).toArray()
        console.log(collection.find({_id: {$in: [ids]}}).toArray())
        console.log('%cuser.service.js line:57 users', 'color: #007acc;', users);
        await client.close()
        return users
    }
}

async function findAllContacts(contactos){
    if(contactos.length > 0){
        let ids = ""
        for (let i = 0; i < contactos.length; i++) {
            ids += `ObjectId("${contactos[i]}"),`
        }
        console.log('%cuser.service.js line:77 ids', 'color: #007acc;', ids);
        await client.connect()
        const db = client.db('armaelequipo')
        const collection = db.collection('user')
        const contacts = await collection.find({_id: {$in: [{ids}] }}).toArray()
        console.log('%cuser.service.js line:82 contacts', 'color: #007acc;', contacts);
        await client.close()
        return contacts
    };
        
}

export {
    findAllContacts,
    findByID,
    create,
    login,
    getAllUsers
}