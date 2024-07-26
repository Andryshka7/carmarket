import { NextFunction, Request, Response } from 'express'
import { verifyToken } from 'helpers/jwt'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.cookies['accessToken']

		if (token) {
			const user = verifyToken(token)
			req.user = user
			next()
		} else {
			res.status(401).json('Token not provided')
		}
	} catch (error) {
		console.log('Error while authenticating', error)
		res.status(401).json('Invalid authentication token')
	}
}

export default authenticate
