import * as service from '../services/participantes.service.js';

function find(req, res) {
    const user_id = req.headers.user_id;
    return service.find(user_id)
    .then(participacion => res.json(participacion))
}

function findByEventId(req, res) {
    const evento_id = req.params.evento_id;
    return service.findByEventId(evento_id)
    .then(participacion => res.json(participacion))
}

function participacion(req, res) {
    const evento_id = req.params.evento_id;
    const user_id = req.body.user_id;
    const estado = req.body.estado;
    return service.participacion(evento_id, user_id, estado)
    .then(participacion => res.json(participacion))
}


export {
    find,
    findByEventId,
    participacion
}