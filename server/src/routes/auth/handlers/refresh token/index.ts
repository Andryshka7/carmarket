import getRefreshToken from 'database/queries/refresh tokens/get token'
import { Request, Response } from 'express'
import { createAccessToken, verifyToken } from 'helpers/jwt'

const handleRefreshToken = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId as number
        const refreshToken = await getRefreshToken(userId)

        const user = verifyToken(refreshToken)
        const accessToken = createAccessToken(user)

        res.cookie('accessToken', accessToken)
        res.json(accessToken)
    } catch (error) {
        console.log('Error while refreshing tokens')
        res.status(500).json('Error while refreshing tokens')
    }
}

export default handleRefreshToken
