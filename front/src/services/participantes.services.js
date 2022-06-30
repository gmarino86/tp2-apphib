const URL_API = 'http://localhost:3333'

async function find() {
    if(localStorage.getItem('user')){
        const user_id = JSON.parse(localStorage.getItem('user'))._id
        return fetch(`${URL_API}/api/participantes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token'),
                'user_id': user_id
            }
        })
        .then(response => response.json())  
        .catch(error => console.log(error))
    } else {
        window.location.href = "/login";
    }
}

async function findByEventId(evento_id, cantidad) {
    if(evento_id){
        console.log(evento_id)
        console.log(cantidad)
        if(localStorage.getItem('user')){
            return fetch(`${URL_API}/api/participantes/${evento_id}/cantidad/${cantidad}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                }
            })
            .then(response => response.json())
            .catch(error => console.log(error))
        } else {
            window.location.href = "/login";
        }
    }
}

async function participacion(evento_id, estado) {
    if(localStorage.getItem('user')){
        return fetch(`${URL_API}/api/participantes/${evento_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                user_id: JSON.parse(localStorage.getItem('user'))._id,
                estado: estado
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    } else {
        window.location.href = "/login";
    }
}


async function noParticipacion(evento_id) {
    if(localStorage.getItem('user')){
        return fetch(`${URL_API}/api/participantes/${evento_id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                user_id: JSON.parse(localStorage.getItem('user'))._id,
                estado: 0
            })
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    } else {
        window.location.href = "/login";
    }
}

export {
    find,
    findByEventId,
    participacion,
    noParticipacion
}