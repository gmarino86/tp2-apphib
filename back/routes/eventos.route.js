import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';
// Modulo de autenticacion
import { authenticate } from '../middleware/auth.middleware.js';


const router = express.Router();

router.get("/api/eventos", [], EventosController.find)
router.get("/api/eventos/:idEvento", EventosController.findByID)
router.post("/api/eventos", EventosController.create)

export default router;