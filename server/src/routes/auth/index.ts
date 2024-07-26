import { CLIENT_URL } from 'config'
import { Router } from 'express'
import { upload } from 'helpers'
import { passport } from 'middleware'

import {
	handleCheckAuth,
	handleGoogleSignIn,
	handleLogIn,
	handleLogOut,
	handleRefreshToken,
	handleSignUp
} from './handlers'

const authRouter = Router()

authRouter.get('/', handleCheckAuth)

authRouter.post('/login', handleLogIn)
authRouter.post('/signup', upload.single('avatar'), handleSignUp)
authRouter.post('/logout', handleLogOut)

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
authRouter.get(
	'/google/callback',
	passport.authenticate('google', { session: false, failureRedirect: CLIENT_URL }),
	handleGoogleSignIn
)

authRouter.post('/refreshtoken', handleRefreshToken)

export default authRouter
