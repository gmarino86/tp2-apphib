import * as service from '../services/participantes.service.js';

function find(req, res) {
    const user_id = req.headers.user_id;
    return service.find(user_id)
    .then(eventos => res.json(eventos))
}

function findByEventId(req, res) {
    const evento_id = req.params.evento_id;
    console.log('%cparticipantes.controller.js line:11 evento_id', 'color: #007acc;', evento_id);
    return service.findByEventId(evento_id)
    .then(eventos => res.json(eventos))
}


function findParticipantes(req, res) {
    const evento_id = req.params.evento_id;
    const cantidad = req.params.cantidad;
    return service.findParticipantes(evento_id,cantidad)
    .then(contactos => {
        res.json(contactos)
    })
}

function participacion(req, res) {
    const evento_id = req.params.evento_id;
    const user_id = req.body.user_id;
    const estado = req.body.estado;
    return service.participacion(evento_id, user_id, estado)
    .then(eventos => res.json(eventos))
}


export {
    find,
    findParticipantes,
    participacion,
    findByEventId
}