import getRefreshToken from 'database/queries/refresh tokens/get token'
import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'
import { User } from 'types'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET!

const handleRefreshToken = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId as number
        const refreshToken = await getRefreshToken(userId)

        const { id, username, email, avatar } = jwt.verify(refreshToken, JWT_SECRET) as User
        const accessToken = createAccessToken({ id, username, email, avatar })

        res.cookie('accessToken', accessToken)
        res.json(accessToken)
    } catch (error) {
        console.log('Error while refreshing tokens')
        res.status(500).json('Error while refreshing tokens')
    }
}

export default handleRefreshToken
