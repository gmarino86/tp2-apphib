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

async function findByID(idU) {
    return fetch(`${URL_API}/api/user/${idU}`, {
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

async function getAllUsers(evento){
    console.log('%cuser.services.js line:45 evento', 'color: #007acc;', evento);
    return fetch(`${URL_API}/api/user/evento`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(evento)
    })
    .then(response => response.json())
}

export {
    create,
    findByID,
    login,
    getAllUsers
}