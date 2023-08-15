import path from 'path'
import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import passport from 'middleware/passport'
import cookieParser from 'cookie-parser'
import { usersRouter, carsRouter, authRouter } from 'routes'
import pool from 'database'

dotenv.config()

const PORT = process.env.PORT || 4000
const CLIENT_URL = process.env.CLIENT_URL

const app = express()

app.use(json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))

app.use(passport.initialize())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/cars', carsRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.use('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.listen(PORT, () => {
    console.log('Server is working!')
})
