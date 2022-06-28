import * as service from '../services/contactos.service.js';

function findContacts(req, res) {
    const idU = req.params.idU;
    return service.findContacts(idU)
    .then(contactos => res.json(contactos))
}

export {
    findContacts
}