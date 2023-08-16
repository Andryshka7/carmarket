import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { User } from 'types'
import { Request, Response, NextFunction } from 'express'

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET!

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '')
        if (token) {
            const { id, username, email, avatar } = jwt.verify(token, JWT_SECRET) as User
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
