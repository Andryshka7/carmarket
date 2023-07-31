import path from 'path'
import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import carsRouter from 'routes/cars'
import { usersRouter } from 'routes'

dotenv.config()

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(json())

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/cars', carsRouter)
app.use('/users', usersRouter)

app.use('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.listen(PORT, () => {
    console.log('Server is working!')
})
