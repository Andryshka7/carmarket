import { Request, Response } from 'express'
import { verifyToken } from 'helpers'

const handleCheckAuth = async (req: Request, res: Response) => {
	try {
		const token = req.cookies['accessToken']
		const user = verifyToken(token)
		res.json(user)
	} catch (error) {
		res.json(null)
	}
}

export default handleCheckAuth
