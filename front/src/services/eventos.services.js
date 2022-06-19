async function find() {
    return fetch(`http://localhost:3333/api/eventos`)
        .then(response => response.json())   
}

async function findByID(id) {
    return fetch(`http://localhost:3333/api/eventos/${id}`)
        .then(response => response.json())   
}

export {  
    find,
    findByID
}