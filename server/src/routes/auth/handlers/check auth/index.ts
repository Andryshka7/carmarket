import { Request, Response } from 'express'

const handleCheckAuth = async (req: Request, res: Response) => {
    res.status(200).json()
}

export default handleCheckAuth
