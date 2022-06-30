const URL_API = 'http://localhost:3333'

async function create(user) {
    return fetch(`${URL_API}/api/user`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
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


export {
    create,
    findByID,
    login,
    
}