const URL_API = 'http://localhost:3333'

async function olvidePass(mailOfPass) {
    console.log('%cuser.services.js line:79 mailOfPass', 'color: #007acc;', mailOfPass);
    return fetch(`${URL_API}/api/user/olvide-pass`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailOfPass)
    })
    .then(response => response.json());
}

async function verifyToken(token, mail) {
    return fetch(`${URL_API}/api/user/verify-pass`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token,
            mail
        })
    })
    .then(response => response.json());
}

export {
    olvidePass,
    verifyToken
}