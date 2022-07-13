import * as service from '../services/user.service.js';
import * as serviceRecovery from '../services/recovery.service.js';
import * as helper from '../helper/nodemailer.js';
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
    const friend_ids = contactos.map(contacto => contacto.friend_id);
    return service.findAllContacts(friend_ids)
    .then(jugadores => {
        res.json(jugadores)
    })
}

function findAllPlayers(req, res) {
    const user_ids = req.body;
    return service.findAllPlayers(user_ids)
    .then(jugadores => {
        res.json(jugadores)
    })
}

function recoveryPass(req, res) {
    const mail = req.body;
    service.findByEmail(mail)
    .then(user => {
        if (user.mail) {
            const token = jwt.sign({
                mail: user.mail
            }, 'secret');

            serviceRecovery.saveToken(token, user.mail)
            .then(() => {
                helper.enviarMail(user, token)
                .then(() => {
                    res.status(200).json({message: 'Email enviado'})
                })
                .catch(err => res.status(501).json(err))

            })
            .catch(err => res.status(502).json(err))
        } else {
            res.status(200).json({message: 'El usuario no existe'})
        }
    }).catch(err => res.status(500).json(err))
}

function verifyPass(req, res) {
    const mailVerification = req.body;
    try{
        let data = jwt.verify(mailVerification.token, 'secret');
        if(mailVerification.mail === data.mail) {
            serviceRecovery.verifyToken(data)
            .then(data => {
                if(data){
                res.status(200).json({message: 'Token verificado'})
                } else {
                    res.status(200).json({message: 'Token no verificado'})
                }
            }).catch(err => res.status(500).json(err))
        } else {
            res.status(400).json({error: 'Hubo un error con el token'})
        }
    } catch(err) {
        res.status(400).json({error: 'El token se ha modificado'})
    }
    
}

function updatePass(req, res) {
    const data = req.body;
    service.updatePass(data)
    .then(() => {
        res.status(200).json({message: 'Contraseña actualizada'})
    }).catch(err => res.status(500).json(err))
}

export {
    findAllPlayers,
    findAllContacts,
    findByID,
    login,
    create,
    recoveryPass,
    verifyPass,
    updatePass
}