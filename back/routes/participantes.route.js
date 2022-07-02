import express from 'express';
import * as ParticipantesController from '../controllers/participantes.controller.js';
import { autorization } from '../middleware/auth.middleware.js';
const router = express.Router();

// Busca los eventos en donde participa el usuario
router.get("/", [autorization], ParticipantesController.find)
// Trea todos los documentos de la collection "participantes" de la base de datos con un "evento_id" especifico
router.get("/evento/:evento_id", [autorization], ParticipantesController.findByEventId) 

// Agrega un participante a un evento
router.patch("/:evento_id", [autorization], ParticipantesController.participacion)
// Trae todos los participantes
router.get("/:evento_id/cantidad/:cantidad", [autorization], ParticipantesController.findParticipantes);

export default router;