import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import slug from 'slug'
import User from '../models/User' 
import { comparePassword, hashPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
    
    // Validacion de errores
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email,  password } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('User already exists')
         return res.status(400).json({ error: error.message })
        }

    const user = new User(req.body)
    const hash = await hashPassword(password)

    const handle = (slug(req.body.handle, ''))
    const handleExists = await User.findOne({ handle })
    if (handleExists) {
        const error = new Error('Handle already exists')
        return res.status(409).json({ error: error.message })
    }
    // console.log(hash)
    user.handle = handle
    user.password = hash
    await user.save()

    res.status(201).send('User created successfully');
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' })
    }

    const user = await User.findOne({ email })
    if (!user || !(await comparePassword(password, user.password))) {  // Compara la contraseña ingresada con la contraseña hasheada almacenada en la base de datos
        return res.status(401).json({ error: 'Invalid email or password' })
    }

    return res.status(200).send('Se inicio sesion con exito')
}