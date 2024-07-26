import { compare } from 'bcrypt'
import { storeRefreshToken } from 'database/queries/refresh tokens'
import { fetchUserByEmail } from 'database/queries/users'
import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'

const handleLogIn = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body

		const user = await fetchUserByEmail(email)

		if (user && (await compare(password, user.password))) {
			const accessToken = createAccessToken(user)
			const refreshToken = createRefreshToken(user)

			res.cookie('accessToken', accessToken, {
				maxAge: 1000 * 60 * 60 * 24,
				secure: true,
				httpOnly: true
			})
			await storeRefreshToken(refreshToken, user.id)

			res.status(200).json(user)
		} else {
			res.status(401).json('Wrong credentials!')
		}
	} catch (error) {
		console.log('Error while logging in', error)
		res.status(500).json('Error while logging in')
	}
}

export default handleLogIn
