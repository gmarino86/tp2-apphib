const URL_API = 'http://localhost:3333'

async function find() {
    if(localStorage.getItem('user')){
        const id_jugador = JSON.parse(localStorage.getItem('user'))._id
        return fetch(`${URL_API}/api/eventos`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
                'id-jugador': id_jugador
            }
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    } else {
        window.location.href = "/login";
    }
}

async function findByID(id) {
    return fetch(`${URL_API}/api/eventos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
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

async function participar(id, user ){
    return fetch(`${URL_API}/api/eventos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
            'id-jugador': user,
            'estado': 1
        }
    })  
    .then(response => response.json())
}


async function noParticipar(id, user ){
    return fetch(`${URL_API}/api/eventos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
            'id-jugador': user,
            'estado': 0
        }
    })  
    .then(response => response.json())
}

export {  
    find,
    findByID,
    create,
    participar,
    noParticipar
}