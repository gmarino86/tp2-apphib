const URL_API = 'http://localhost:3333'

async function find() {
    return fetch(`${URL_API}/api/eventos`)
        .then(response => response.json())   
}

async function findByID(id) {
    return fetch(`${URL_API}/api/eventos/${id}`)
        .then(response => response.json())   
}

async function create(evento) {
    return fetch(`${URL_API}/api/eventos`, {
        method: 'POST',
        body: JSON.stringify(evento),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
}

export {  
    find,
    findByID,
    create
}