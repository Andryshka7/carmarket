import { sign, verify } from 'jsonwebtoken'
import { User } from 'types'
import { JWT_SECRET } from 'config'

const createAccessToken = (user: User) => sign(user, JWT_SECRET, { expiresIn: '1h' })
const createRefreshToken = (user: User) => sign(user, JWT_SECRET, { expiresIn: '24h' })

const verifyToken = (token: string) => {
    const { id, username, email, avatar } = verify(token, JWT_SECRET) as User
    return { id, username, email, avatar }
}

export { createAccessToken, createRefreshToken, verifyToken }
