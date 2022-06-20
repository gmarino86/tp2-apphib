const URL_API = 'http://localhost:3333'

async function findByID(idJ) {
    return fetch(`${URL_API}/api/user/${idJ}`)
        .then(response => response.json())   
}
export {  
    findByID
}