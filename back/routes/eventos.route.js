import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';

const router = express.Router();

router.get("/api/eventos", EventosController.find)
router.post("/api/eventos", EventosController.create)

export default router;