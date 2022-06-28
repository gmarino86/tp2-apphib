import express from 'express';
import * as ContactosController from '../controllers/contactos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post("/", [autorization], ContactosController.findContactsBuscar);
router.get("/:idU", [autorization], ContactosController.findContacts);

export default router;