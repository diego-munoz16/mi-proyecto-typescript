import btrypt from 'bcrypt'

export const hashPassword = async (password : string) => {
    const salt = await btrypt.genSalt(10)

    // console.log(password)

    return await btrypt.hash(password, salt)
}

