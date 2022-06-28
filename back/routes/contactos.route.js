import express from 'express';
import * as ContactosController from '../controllers/contactos.controller.js';
const router = express.Router();
import { autorization } from '../middleware/auth.middleware.js';

router.get("/:idU", [autorization], ContactosController.findContacts);

export default router;