import { Router } from 'express'
import { fetchCars, deleteCar } from 'database/queries/cars'
import { createCar } from 'database/queries/cars'
import upload from 'helpers/multer'
import { createImage } from 'database/queries/images'
import dotenv from 'dotenv'

dotenv.config()

const SERVER_URL = process.env.SERVER_URL

const carsRouter = Router()

carsRouter.get('/', async (req, res) => {
    try {
        const carList = await fetchCars()
        res.status(200).json(carList)
    } catch (error) {
        res.status(400).json('Error while fetching cars')
        console.log(error)
    }
})

carsRouter.post('/', upload.array('image'), async (req, res) => {
    try {
        const seller = 1
        const car = JSON.parse(req.body.car)
        const id = await createCar(car, seller)

        const images: string[] = []

        if (Array.isArray(req.files)) {
            req.files.forEach((image) => {
                images.push(image.filename)
            })
        }

        const promises: Promise<void>[] = []

        images.forEach((image) => {
            const name = `${SERVER_URL}/images/${image}`
            promises.push(createImage(name, id))
        })

        await Promise.all(promises)

        const created = { ...car, id, seller, images }

        res.status(200).json(created)
    } catch (error) {
        res.status(400).json('Error while creating car')
        console.log(error)
    }
})

carsRouter.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        await deleteCar(id)
        res.status(200).json('Car has been deleted')
    } catch (error) {
        res.status(400).json('Error while deleting car')
        console.log(error)
    }
})

export default carsRouter
