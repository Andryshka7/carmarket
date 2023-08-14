import passport from 'passport'
import dotenv from 'dotenv'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

dotenv.config()

const config = {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.SERVER_URL! + '/auth/google/callback'
}

passport.use(
    new GoogleStrategy(config, (accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    })
)

export default passport
