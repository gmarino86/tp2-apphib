import express from 'express';
import * as ContactosController from '../controllers/contactos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';
const router = express.Router();

// Trae todos los contactos
router.get("/:idU", [autorization], ContactosController.findContacts);

//Busca por nombre
router.get("/nombre/:name", [autorization], ContactosController.findContactsBuscar);
// Agrega un contacto
router.post("/:idU/:idC", [autorization], ContactosController.addContact);

export default router;