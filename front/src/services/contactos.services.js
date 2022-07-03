const URL_API = 'http://localhost:3333'

async function findContacts() {
    let user_id = JSON.parse(localStorage.getItem('user'));
    user_id = user_id._id;
    return fetch(`${URL_API}/api/contactos/${user_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())   
}

async function findContactsNew(name){
    return fetch(`${URL_API}/api/contactos/nombre/${name}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}


async function addContact(userId, contactId){
    return fetch(`${URL_API}/api/contactos/${userId}/${contactId}`, {
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