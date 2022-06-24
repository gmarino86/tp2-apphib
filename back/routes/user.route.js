import express from 'express';
import * as UserController from '../controllers/user.controller.js';
const router = express.Router();
import { autorization } from '../middleware/auth.middleware.js';

router.post("/", UserController.create);
router.post("/login", UserController.login);
router.get("/:idJ", [autorization], UserController.findByID);

export default router;