import { Request, Response } from 'express'

const handleGetMe = async (req: Request, res: Response) => {
    const user = req.user
    res.status(200).json(user)
}

export default handleGetMe
