import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';
// Modulo de autenticacion
// import { authenticate } from '../middleware/auth.middleware.js';


const router = express.Router();

router.get("/", EventosController.find)
router.get("/:idEvento", EventosController.findByID)
router.post("/", EventosController.create)

export default router;