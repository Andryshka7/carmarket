import { deleteRefreshToken } from 'database/queries/refresh tokens'
import { Request, Response } from 'express'

const handleLogOut = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId as number
        await deleteRefreshToken(userId)
    } catch (error) {
        res.status(400).json('Error while logging out')
        console.log(error)
    }
}

export default handleLogOut
