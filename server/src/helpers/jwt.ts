import jwt from 'jsonwebtoken'
import { User } from 'types'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET!

const createAccessToken = (user: User) => jwt.sign(user, JWT_SECRET, { expiresIn: '10s' })
const createRefreshToken = (user: User) => jwt.sign(user, JWT_SECRET, { expiresIn: '30s' })

export { createAccessToken, createRefreshToken }
