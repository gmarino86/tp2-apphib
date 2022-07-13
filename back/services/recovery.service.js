import { MongoClient } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')


async function saveToken(token, mail){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('recovery')
    const userToken = await collection.insertOne({
        token: token,
        mail: mail
    })
    return userToken
}

async function verifyToken(data){
    await client.connect()
    const db = client.db('armaelequipo')
    const collection = db.collection('recovery')
    const userToken = await collection.findOne({mail: data.mail})
    return userToken
}

export {
    saveToken,
    verifyToken
}
