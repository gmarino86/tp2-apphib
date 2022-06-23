const URL_API = 'http://localhost:3333'

async function findByID(idJ) {
    return fetch(`${URL_API}/api/user/${idJ}`)
        .then(response => response.json())   
}

async function login({mail, pass}) {
    return fetch(`${URL_API}/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mail: mail,
            pass: pass
        })
    })
    .then(response => response.json())   
}


export {  
    findByID,
    login
}