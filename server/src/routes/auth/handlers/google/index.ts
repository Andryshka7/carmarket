import { Request, Response } from 'express'
import { Profile } from 'passport'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'
import { createUser, fetchUserByEmail } from 'database/queries/users'
import { storeRefreshToken } from 'database/queries/refresh tokens'
import { CLIENT_URL } from 'config'

const handleGoogleSignIn = async (req: Request, res: Response) => {
    try {
        const profile = req.user as Profile
        const email = profile.emails![0].value

        const user = await fetchUserByEmail(email)

        if (user) {
            const { id, username, avatar } = user

            const accessToken = createAccessToken({ id, username, email, avatar })
            const refreshToken = createRefreshToken({ id, username, email, avatar })

            res.cookie('accessToken', accessToken, { maxAge: 1000 * 60 * 60 * 24 })
            await storeRefreshToken(refreshToken, id)
        } else {
            const username = profile.displayName
            const avatar = profile.photos![0].value
            const google_id = profile.id
            const id = await createUser({ username, email, avatar, google_id })

            const accessToken = createAccessToken({ id, username, email, avatar })
            const refreshToken = createRefreshToken({ id, username, email, avatar })

            res.cookie('accessToken', accessToken, { maxAge: 1000 * 60 * 60 * 24 })
            await storeRefreshToken(refreshToken, id)
        }

        res.redirect(CLIENT_URL!)
    } catch (error) {
        res.status(500).json('Error while signing up')
        console.log('Error while signing up')
    }
}

export default handleGoogleSignIn
