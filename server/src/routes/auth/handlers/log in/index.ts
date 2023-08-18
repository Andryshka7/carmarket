import { compare } from 'bcrypt'
import { storeRefreshToken } from 'database/queries/refresh tokens'
import { fetchUserByEmail } from 'database/queries/users'
import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'

const handleLogIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await fetchUserByEmail(email)

        if (user && (await compare(password, user.password))) {
            const accessToken = createAccessToken(user)
            const refreshToken = createRefreshToken(user)

            res.cookie('accessToken', accessToken)
            await storeRefreshToken(refreshToken, user.id)
            
            res.status(200).json(user)
        } else {
            res.status(400).json('Wrong credentials!')
        }
    } catch (error) {
        res.status(400).json('Error while logging in')
        console.log(error)
    }
}

export default handleLogIn
