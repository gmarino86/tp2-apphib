const URL_API = 'http://localhost:3333'

async function create(user) {
    return fetch(`${URL_API}/api/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
}

async function findByID(user_id) {
    return fetch(`${URL_API}/api/user/${user_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())   
}

async function login({mail, pass}) {
    return fetch(`${URL_API}/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({mail, pass})
    })
    .then(response => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Credenciales Inválidas')
        }
    })
}

// Trae los contactos de un usuario
async function getAllUsers(contactos){
    if(contactos.length > 0){
        return fetch(`${URL_API}/api/user/contactos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify(contactos)
        })
        .then(response => response.json())
    } else{
        return []
    }
}

// Trae los contactos de un usuario
async function getAllPlayers(user_ids){
    if(user_ids.length > 0){
        return fetch(`${URL_API}/api/user/jugadores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify(user_ids)
        })
        .then(response => response.json())
    } else{
        return []
    }
}

async function olvidePass(mailOfPass) {
    return fetch(`${URL_API}/api/user/olvide-pass`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailOfPass)
    })
    .then(response => response.json());
}

async function updatePass(mail, pass) {
    return fetch(`${URL_API}/api/user/update-pass`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail,
            pass
        })
    })
    .then(response => response.json());
}

export {
    create,
    findByID,
    login,
    getAllUsers,
    getAllPlayers,
    olvidePass,
    updatePass
}