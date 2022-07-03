import express from 'express';
import * as ParticipantesController from '../controllers/participantes.controller.js';
import { autorization } from '../middleware/auth.middleware.js';
const router = express.Router();

// Busca los eventos en donde participa el usuario
router.get("/", [autorization], ParticipantesController.find)
// Agrega un participante a un evento
router.patch("/:evento_id", [autorization], ParticipantesController.participacion)
router.post("/:evento_id", [autorization], ParticipantesController.addContactToEvent)
// Trea todos los documentos de la collection "participantes" de la base de datos con un "evento_id" especifico
router.get("/evento/:evento_id", [autorization], ParticipantesController.findByEventId) 


export default router;