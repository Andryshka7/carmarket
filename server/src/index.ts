import path from 'path'
import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { passport } from 'middleware'
import { carsRouter, authRouter } from 'routes'
import { PORT, CLIENT_URL } from 'config'

const app = express()

app.use(json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))

app.use(passport.initialize())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/cars', carsRouter)
app.use('/auth', authRouter)

app.use('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.listen(PORT, () => {
    console.log('Server is working!')
})
