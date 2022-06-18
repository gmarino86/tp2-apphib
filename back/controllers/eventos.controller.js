import * as service from '../services/eventos.service.js';

function find(req, res) {
    return service.find()
    .then(eventos => res.json(eventos))
}

function create(req, res) {
    const evento = req.body;
    return service.create(evento)
    .then(evento => res.json(evento))
}

export {
    find,
    create
}