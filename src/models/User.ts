import mongoose, { Schema } from 'mongoose'


// Genirics
export interface IUser{    //La I hace referencia a que es una interfaz, la E a que es un enum, la T a que es un tipo, la C a que es una clase
    handle: string
    name: string
    email: string
    password: string
}



const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model<IUser>('User', userSchema)  //(User: nombre del modelo, userSchema: esquema del modelo)
export default User  //(User = Modelo)