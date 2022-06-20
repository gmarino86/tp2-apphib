import * as service from '../services/user.service.js';

// function find(req, res) {
//     return service.find()
//     .then(eventos => res.json(eventos))
// }

// function create(req, res) {
//     const evento = req.body;
//     return service.create(evento)
//     .then(evento => res.json(evento))
// }

function findByID(req, res) {
    const idJ = req.params.idJ;
    return service.findByID(idJ)
    .then(jugador => {
        res.json(jugador)
    })
}

export {
    // find,
    findByID
    // create
}