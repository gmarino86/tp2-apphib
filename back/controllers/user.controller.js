import * as service from '../services/user.service.js';
import jwt from 'jsonwebtoken';

function create(req, res) {
    const user = req.body;
    return service.create(user)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err))
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
    const idU = req.params.idU;
    return service.findByID(idU)
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