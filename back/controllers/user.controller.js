import * as service from '../services/user.service.js';
import jwt from 'jsonwebtoken';

function create(req, res) {
    const user = req.body;
    service.create(user)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => res.status(500).json([{"message":"El usuario ya existe"}]))
}

function login(req, res) {
    const user = req.body;
    service.login(user)
    .then(user => {
        const token = jwt.sign({
            id: user._id,
            mail: user.mail,
            name: user.name,
        }, 'secret');
        res.status(200).json({user, token})
    })
    .catch(err => res.status(500).json(err))
}

function findByID(req, res) {
    const user_id = req.params.user_id;
    return service.findByID(user_id)
    .then(jugador => {
        res.json(jugador)
    })
}
function findAllContacts(req, res) {
    const contactos = req.body;
    return service.findAllContacts(contactos)
    .then(jugadores => {
        res.json(jugadores)
    })
}

export {
    findAllContacts,
    findByID,
    login,
    create
}