const URL_API = 'http://localhost:3333'

async function findContacts() {
    let idU = JSON.parse(localStorage.getItem('user'))._id
    return fetch(`${URL_API}/api/contactos/${idU}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())   
}

async function findContactsNew(nombre){
    return fetch(`${URL_API}/api/contactos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
            nombre: nombre
        })
    })
    .then(response => response.json())
}


async function addContact(userId, contactId){
    console.log(userId, contactId)
    return fetch(`${URL_API}/api/contactos/${userId}/contact/${contactId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}


export {  
    findContacts,
    findContactsNew,
    addContact
}