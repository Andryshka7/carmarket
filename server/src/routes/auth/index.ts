import { Router } from 'express'
import passport from 'middleware/passport'
import upload from 'helpers/multer'
import { compare, hash } from 'bcrypt'
import { Profile } from 'passport-google-oauth20'
import { createUser, fetchUserByEmail } from 'database/queries/users'
import { authenticate, createTokens } from 'middleware/jwt'
import dotenv from 'dotenv'
import { User } from 'types'

dotenv.config()

const CLIENT_URL = process.env.CLIENT_URL
const SERVER_URL = process.env.SERVER_URL

const authRouter = Router()

authRouter.get('/getme', authenticate, async (req, res) => {
    const user = req.user
    res.status(200).json(user)
})

authRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await fetchUserByEmail(email)

        if (user && (await compare(password, user.password))) {
            const tokens = createTokens(user)
            res.cookie('tokens', JSON.stringify(tokens))
            res.status(200).json(user)
        } else {
            res.status(400).json('Wrong credentials!')
        }
    } catch (error) {
        res.status(400).json('Error while logging in')
        console.log(error)
    }
})

authRouter.post('/signup', upload.single('avatar'), async (req, res) => {
    try {
        const username = req.body.username as string
        const email = req.body.email as string
        const password = await hash(req.body.password, 10)
        const avatar = `${SERVER_URL}/images/${req.file?.filename}`

        console.log({ username, email, avatar, password })

        const id = await createUser({ username, email, avatar, password })

        const user = { id, username, email, avatar }
        const tokens = createTokens(user)

        res.cookie('tokens', JSON.stringify(tokens))
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json('Error while signing up')
        console.log(error)
    }
})

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

authRouter.get(
    '/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: CLIENT_URL }),
    async (req, res) => {
        try {
            const profile = req.user as Profile
            const email = profile.emails![0].value

            const user = await fetchUserByEmail(email)

            if (user) {
                const { id, username, avatar } = user
                const tokens = createTokens({ id, username, email, avatar })
                res.cookie('tokens', JSON.stringify(tokens))
            } else {
                const username = profile.displayName
                const avatar = profile.photos![0].value
                const google_id = profile.id
                const id = await createUser({ username, email, avatar, google_id })

                const tokens = createTokens({ id, username, email, avatar })
                res.cookie('tokens', JSON.stringify(tokens))
            }

            res.redirect(CLIENT_URL!)
        } catch (error) {
            res.status(400).json('Error while signing up')
            console.log(error)
        }
    }
)

authRouter.get('/refreshtoken', authenticate, (req, res) => {
    try {
        const user = req.user as User
        console.log(user)

        const tokens = createTokens(user as User)

        res.cookie('tokens', JSON.stringify(tokens))
        res.status(200).json(tokens.accessToken)
    } catch (error) {
        console.log('Error while refreshing tokens')
        res.status(500).json('Error while refreshing tokens')
    }
})

export default authRouter
