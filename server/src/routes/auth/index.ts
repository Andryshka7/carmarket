import { Router } from 'express'
import { upload } from 'helpers'
import { authenticate, passport } from 'middleware'
import {
    handleCheckAuth,
    handleGetMe,
    handleGoogleSignIn,
    handleLogIn,
    handleRefreshToken,
    handleSignUp,
    handleLogOut
} from './handlers'
import { CLIENT_URL } from 'config'

const authRouter = Router()

authRouter.get('/checkauth', authenticate, handleCheckAuth)
authRouter.get('/getme', authenticate, handleGetMe)

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
