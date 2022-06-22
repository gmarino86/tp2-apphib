import express from 'express';
import * as UserController from '../controllers/user.controller.js';
const router = express.Router();
// Modulo de autenticacion
// import { authenticate } from '../middleware/auth.middleware.js';

router.post("/", UserController.create);
router.post("/login", UserController.login);
router.get("/:idJ", UserController.findByID);

export default router;