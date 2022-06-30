import * as service from '../services/eventos.service.js';

function findAll(req, res) {
    return service.find()
    .then(eventos => res.json(eventos))
}

function create(req, res) {
    const evento = req.body;
    return service.create(evento)
    .then(evento => res.json(evento))
}

function findByID(req, res) {
    const evento_id = req.params.evento_id;
    return service.findByID(evento_id)
    .then(evento => res.json(evento))
}

export {
    findAll,
    findByID,
    create
}

