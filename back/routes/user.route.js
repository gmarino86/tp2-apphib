import express from 'express';
import * as UserController from '../controllers/user.controller.js';
import { autorization } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/", UserController.create);
router.post("/login", UserController.login);
router.post("/contactos", [autorization], UserController.findAllContacts);
router.post("/jugadores", [autorization], UserController.findAllPlayers);
router.get("/:user_id", [autorization], UserController.findByID);
router.post("/olvide-pass", UserController.recoveryPass);
router.post("/verify-pass", UserController.verifyPass);
router.post("/update-pass", UserController.updatePass);

export default router;