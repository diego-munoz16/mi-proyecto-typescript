import { Router } from "express"
import { body } from "express-validator"
import { createAccount, login } from "./handlers/index"

const router = Router();

//Routing
router.get('/', (req, res) => {
  res.send('Hello World on Express');
});

// Autrenticacion de registro de usuarios

router.post('/auth/register', 
  body('handle').notEmpty().withMessage('El jandle es requerido'),
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
  createAccount);
  
router.post('/auth/login', 
  body('email').isEmail().normalizeEmail().withMessage('El correo electrónico es inválido'),
  body('password').notEmpty().withMessage('La contraseña es requerida'),
  login);

export default router;