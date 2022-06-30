import * as service from '../services/contactos.service.js';

function findContacts(req, res) {
    const idU = req.params.idU;
    return service.findContacts(idU)
    .then(contactos => {
        console.log('%ccontactos.controller.js line:7 contactos', 'color: #007acc;', contactos);
        res.json(contactos)
    })
}

function findContactsBuscar(req, res) {
    const name = req.params.name;
    return service.findContactsBuscar(name)
    .then(contactos => {
        // console.log('%ccontactos.controller.js line:17 contactos', 'color: #007acc;', contactos);
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