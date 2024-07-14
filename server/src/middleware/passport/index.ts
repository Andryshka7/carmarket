import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SERVER_URL } from 'config'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

const config = {
	clientID: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	callbackURL: SERVER_URL + '/auth/google/callback'
}

passport.use(
	new GoogleStrategy(config, (accessToken, refreshToken, profile, done) => {
		return done(null, profile)
	})
)

export default passport
