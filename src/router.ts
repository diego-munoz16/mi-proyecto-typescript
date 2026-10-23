import { Router } from "express"
import { body } from "express-validator"
import { createAccount } from "./handlers/index"

const router = Router();

//Routing
router.get('/', (req, res) => {
  res.send('Hello World on Express');
});

// Autrenticacion de registro de usuarios

router.post('/auth/register', 
  body('handle').notEmpty(),
  body('email').isEmail().normalizeEmail(),
  createAccount);

export default router;