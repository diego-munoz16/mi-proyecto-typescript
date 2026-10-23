import mongoose from 'mongoose'
import colors from 'colors'

// console.log(process.env.MONGODB_URI)


export const connectDB = async (): Promise<string[]> => {
    try {
        // const url = 'mongodb+srv://dm847332_db_user:YGkAp21KqPhnPy3w@cluster0.5wyvsgo.mongodb.net/?appName=Cluster0'

        //bloquear codigo hasta que se realice la conexion a la base de datos

        const connection = await mongoose.connect(process.env.MONGODB_URI)
        
        // console.log(connection)
        // console.log(process.env) 
        console.log(colors.green.bold('MongoDB connected'))
        return []
    }
    catch (error) {
        console.log(colors.bgRed.white.bold.italic(error.message))
        process.exit(1) // Detiene el sistema si hay un error en la conexion a la base de datos
    }
}
