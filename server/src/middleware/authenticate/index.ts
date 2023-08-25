import { User } from 'types'
import { Request, Response, NextFunction } from 'express'
import { verifyToken } from 'helpers/jwt'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '')
        if (token) {
            const { id, username, email, avatar } = verifyToken<User>(token)
            req.user = { id, username, email, avatar }
            next()
        } else {
            res.status(401).json('Token not provided')
        }
    } catch (error) {
        console.log('Error while authenticating')
        res.status(401).json('Invalid authentication token')
    }
}

export default authenticate
