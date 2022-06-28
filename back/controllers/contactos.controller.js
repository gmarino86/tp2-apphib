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

export {
    findContacts,
    findContactsBuscar
}