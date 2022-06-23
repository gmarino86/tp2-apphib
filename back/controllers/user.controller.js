import * as service from '../services/user.service.js';
import jwt from 'jsonwebtoken';

// function find(req, res) {
//     return service.find()
//     .then(eventos => res.json(eventos))
// }

function create(req, res) {
    const user = req.body;
    return service.create(user)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
}

function login(req, res) {
    const user = req.body;
    return service.login(user)
    .then(user => {
        const token = jwt.sign({
            id: user._id,
            mail: user.mail,
            name: user.name,
        }, 'secret');

        res.header('auth-token',token).status(200).json(user)
    })
    .catch(err => res.status(500).json(err))
}

function findByID(req, res) {
    const idJ = req.params.idJ;
    return service.findByID(idJ)
    .then(jugador => {
        res.json(jugador)
    })
}

export {
    // find,
    findByID,
    login,
    create
}