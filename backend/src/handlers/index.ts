import { validationResult } from 'express-validator'
import slug from 'slug'
import User from '../models/User'
import { checkPassword, hashPassword } from '../utils/auth'
import { Request, Response } from 'express' 

export const createAccount = async (req: Request, res: Response) => {

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

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        const error = new Error('User not found')
        return res.status(404).json({ error: error.message })
    }
    
    const isPasswordValid = await checkPassword(password, user.password)
    if (!isPasswordValid) {
        const error = new Error('Password incorrect')
        return res.status(401).json({ error: error.message })
    }
}