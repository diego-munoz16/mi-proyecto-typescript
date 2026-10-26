import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'

// console.log(express);
const app = express();

connectDB()

//LEER DATOS DE FORMULARIOS  
app.use(express.json())

//app.use('/api', router)
app.use('/', router)

export default app
