import * as service from '../services/contactos.service.js';

function findContacts(req, res) {
    const user_id = req.params.user_id;
    return service.findContacts(user_id)
    .then(contactos => {
        res.json(contactos)
    })
}

function findContactsBuscar(req, res) {
    const name = req.params.name;
    return service.findContactsBuscar(name)
    .then(contactos => {
        res.json(contactos)
    })
}

function addContact(req,res){
    const user_id = req.params.user_id;
    const friend_id = req.params.friend_id;
    return service.addContact(user_id, friend_id)
    .then(contacto => res.json(contacto))
}

export {
    findContacts,
    findContactsBuscar,
    addContact
}