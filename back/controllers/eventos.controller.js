import * as service from '../services/eventos.service.js';

function find(req, res) {
    let id = req.headers['id-jugador']
    return service.find(id)
    .then(eventos => res.json(eventos))
}

function create(req, res) {
    const evento = req.body;
    return service.create(evento)
    .then(evento => res.json(evento))
}

function findByID(req, res) {
    const idEvento = req.params.idEvento;
    return service.findByID(idEvento)
    .then(evento => res.json(evento))
}

export {
    find,
    findByID,
    create
}