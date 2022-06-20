import express from 'express';
import * as UserController from '../controllers/user.controller.js';
// Modulo de autenticacion
// import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();
router.get("/:idJ", UserController.findByID)

export default router;