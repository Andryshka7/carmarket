import { hash } from 'bcrypt'
import { createUser } from 'database/queries/users'
import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'
import dotenv from 'dotenv'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL

const handleSignUp = async (req: Request, res: Response) => {
    try {
        const username = req.body.username as string
        const email = req.body.email as string
        const password = await hash(req.body.password, 10)
        const avatar = `${SERVER_URL}/images/${req.file?.filename}`

        const id = await createUser({ username, email, avatar, password })

        const user = { id, username, email, avatar }

        res.cookie('accessToken', createAccessToken(user))
        res.cookie('refreshToken', createRefreshToken(user))

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json('Error while signing up')
        console.log(error)
    }
}

export default handleSignUp
