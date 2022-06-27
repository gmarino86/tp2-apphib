import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';


const router = express.Router();

router.get("/", [autorization], EventosController.find)
router.post("/", EventosController.create)
router.get("/:idEvento", [autorization], EventosController.findByID)
router.patch("/:idEvento", [autorization], EventosController.participacion)

export default router;