import { sign, verify } from 'jsonwebtoken'
import { User } from 'types'
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET!

const createAccessToken = (user: User) => sign(user, JWT_SECRET, { expiresIn: '1h' })
const createRefreshToken = (user: User) => sign(user, JWT_SECRET, { expiresIn: '24h' })

const verifyToken = <T>(token: string) => verify(token, JWT_SECRET) as T

export { createAccessToken, createRefreshToken, verifyToken }
