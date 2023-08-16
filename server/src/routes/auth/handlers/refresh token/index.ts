import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'
import { User } from 'types'

const handleRefreshToken = (req: Request, res: Response) => {
    try {
        const user = req.user as User
        const accessToken = createAccessToken(user)
        res.cookie('accessToken', accessToken)
        res.json(accessToken)
    } catch (error) {
        console.log('Error while refreshing tokens')
        res.status(500).json('Error while refreshing tokens')
    }
}

export default handleRefreshToken
