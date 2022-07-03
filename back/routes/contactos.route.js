import express from 'express';
import * as ContactosController from '../controllers/contactos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';
const router = express.Router();

router.get("/:user_id", [autorization], ContactosController.findContacts);
//Busca por nombre
router.get("/nombre/:name", [autorization], ContactosController.findContactsBuscar);
// Agrega un contacto
router.post("/:user_id/:friend_id", [autorization], ContactosController.addContact);

export default router;