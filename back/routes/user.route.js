import express from 'express';
import * as UserController from '../controllers/user.controller.js';
import { autorization } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/", UserController.create);
router.post("/login", UserController.login);
router.get("/:user_id", [autorization], UserController.findByID);

export default router;