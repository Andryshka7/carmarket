import { createUser, fetchUserByEmail } from 'database/queries/users'
import { Request, Response } from 'express'
import { createAccessToken, createRefreshToken } from 'helpers/jwt'
import { Profile } from 'passport'
import dotenv from 'dotenv'

dotenv.config()

const CLIENT_URL = process.env.CLIENT_URL

const handleGoogleSignIn = async (req: Request, res: Response) => {
    try {
        const profile = req.user as Profile
        const email = profile.emails![0].value

        const user = await fetchUserByEmail(email)

        if (user) {
            const { id, username, avatar } = user
            res.cookie('accessToken', createAccessToken({ id, username, email, avatar }))
            res.cookie('refreshToken', createRefreshToken({ id, username, email, avatar }))
        } else {
            const username = profile.displayName
            const avatar = profile.photos![0].value
            const google_id = profile.id
            const id = await createUser({ username, email, avatar, google_id })

            res.cookie('accessToken', createAccessToken({ id, username, email, avatar }))
            res.cookie('refreshToken', createRefreshToken({ id, username, email, avatar }))
        }

        res.redirect(CLIENT_URL!)
    } catch (error) {
        res.status(400).json('Error while signing up')
        console.log(error)
    }
}

export default handleGoogleSignIn
