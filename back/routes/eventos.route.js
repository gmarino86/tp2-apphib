import express from 'express';
import * as EventosController from '../controllers/eventos.controller.js';
import { autorization } from '../middleware/auth.middleware.js';


const router = express.Router();

router.get("/", [autorization], EventosController.find)
router.get("/:idEvento", EventosController.findByID)
router.post("/", EventosController.create)

export default router;