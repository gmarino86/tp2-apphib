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
    const idU = req.params.idU;
    const idC = req.params.idC;
    return service.addContact(idU, idC)
    .then(contacto => res.json(contacto))
}

export {
    findContacts,
    findContactsBuscar,
    addContact
}