import getRefreshToken from 'database/queries/refresh tokens/get token'
import { Request, Response } from 'express'
import { createAccessToken, verifyToken } from 'helpers/jwt'

const handleRefreshToken = async (req: Request, res: Response) => {
	try {
		const userId = req.body.userId as number
		const refreshToken = await getRefreshToken(userId)

		const user = verifyToken(refreshToken)
		const accessToken = createAccessToken(user)

		res.cookie('accessToken', accessToken, {
			maxAge: 1000 * 60 * 60 * 24,
			secure: true,
			httpOnly: true
		})

		res.json()
	} catch (error) {
		console.log('Error while refreshing tokens', error)
		res.status(401).json('Error while refreshing tokens')
	}
}

export default handleRefreshToken
