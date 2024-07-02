import { deleteRefreshToken } from 'database/queries/refresh tokens'
import { Request, Response } from 'express'

const handleLogOut = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId as number
        await deleteRefreshToken(userId)
    } catch (error) {
        console.log('Error while logging out', error)
        res.status(500).json('Error while logging out')
    }
}

export default handleLogOut
