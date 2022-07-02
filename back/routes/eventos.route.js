import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/", [autorization], EventosController.findAll)
router.post("/", EventosController.create)
router.get("/:evento_id", [autorization], EventosController.findByID)
router.post("/array", [autorization], EventosController.findArray)

export default router;
