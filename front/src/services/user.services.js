const URL_API = 'http://localhost:3333'

async function findByID(idJ) {
    return fetch(`${URL_API}/api/user/${idJ}`, {
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
    findByID,
    login
}