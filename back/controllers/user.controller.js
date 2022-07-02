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
    const idU = req.params.idU;
    console.log('%cuser.controller.js line:29 idU', 'color: #007acc;', idU);
    return service.findByID(idU)
    .then(jugador => {
        res.json(jugador)
    })
}

function getAllUsers(req, res) {
    const evento_id = req.body;
    console.log('%cuser.controller.js line:38 evento_id', 'color: #007acc;', evento_id);
    if (evento_id !== undefined || evento_id !== null || evento_id !== "") {
        console.log('%cuser.controller.js line:40 evento_id', 'color: #007acc;', evento_id);
        return service.getAllUsers(evento_id)
        .then(participacion => {
            res.json(participacion)
        })
    } else {
        res.json([])
    }
}

export {
    // find,
    findByID,
    login,
    create,
    getAllUsers
}