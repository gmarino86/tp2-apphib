import * as service from '../services/eventos.service.js';
import * as ParticipantesServices from '../services/participantes.service.js';

function findAll(req, res) {
    return service.find()
    .then(eventos => res.json(eventos))
}

function create(req, res) {
    const evento = req.body.evento_id;
    const user_id = req.body.user_id;
    return service.create(evento)
    .then(evento => {
        return ParticipantesServices.insertUTE(evento.insertedId, user_id)
        .then(evento => res.json(evento))
    })
}

function findByID(req, res) {
    const evento_id = req.params.evento_id;
    return service.findByID(evento_id)
    .then(evento => res.json(evento))
}

function findArray(req, res) {
    const eventos = req.body
    return service.findArray(eventos)
    .then(eventos => res.json(eventos))
}

export {
    findAll,
    findByID,
    create,
    findArray
}

