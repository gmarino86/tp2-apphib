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

function participacion(req, res) {
    const idEvento = req.params.idEvento;
    const idJugador = req.headers['id-jugador'];
    const estado = req.headers['estado'];
    return service.participacion(idEvento, idJugador, estado)
    .then(response => {
        console.log('%ceventos.controller.js line:26 evento', 'color: #007acc;', response);
        if (response) {
            res.json({"message": "Estás participando en este evento"})
        }else{
            res.json({"message": "No estás participando en este evento"})
        }
    })
}

export {
    find,
    findByID,
    create,
    participacion
}

