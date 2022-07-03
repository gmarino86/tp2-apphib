const URL_API = 'http://localhost:3333'

async function findAll() {
    const user_id = JSON.parse(localStorage.getItem('user'))._id
    return fetch(`${URL_API}/api/eventos`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
            'user_id': user_id
        }
    })
    .then(response => response.json())  
    .catch(error => console.log(error))
}

async function findByID(evento_id) {
    return fetch(`${URL_API}/api/eventos/${evento_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())   
}

async function create(evento) {
    const user_id = JSON.parse(localStorage.getItem('user'))._id
    console.log('%ceventos.services.js line:29 evento', 'color: #007acc;', evento);
    return fetch(`${URL_API}/api/eventos`, {
        method: 'POST',
        body: 
        JSON.stringify({
            evento_id: evento,
            user_id: user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}

async function findArray(eventos) {
    return fetch(`${URL_API}/api/eventos/array`, {
        method: 'POST',
        body: JSON.stringify(eventos),
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}

export {
    findAll,
    findByID,
    create,
    findArray
}