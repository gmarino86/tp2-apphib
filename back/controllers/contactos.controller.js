import * as service from '../services/contactos.service.js';

function findContacts(req, res) {
    const idU = req.params.idU;
    return service.findContacts(idU)
    .then(contactos => res.json(contactos))
}

function findContactsBuscar(req, res) {
    const nombre = req.body.nombre;
    return service.findContactsBuscar(nombre)
    .then(contactos => res.json(contactos))
}

function addContact(req,res){
    const idU = req.params.idU;
    const idC = req.params.idC;
    console.log(idU, idC)
    return service.addContact(idU, idC)
    .then(contacto => res.json(contacto))
}

export {
    findContacts,
    findContactsBuscar,
    addContact
}