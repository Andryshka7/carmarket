import { Router } from 'express'
import { addCar, fetchCars, deleteCar } from 'database/queries'
import { Car } from 'types'

const carsRouter = Router()

carsRouter.get('/', async (req, res) => {
    try {
        const carList = await fetchCars()
        res.json(carList)
    } catch (error) {
        res.status(400).json('Error while fetching cars')
    }
})

carsRouter.post('/', async (req, res) => {
    try {
        const car: Car = req.body
        await addCar(car)
        res.status(200)
    } catch (error) {
        res.status(400).json('Error while creating car')
    }
})

carsRouter.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        await deleteCar(id)
        res.status(200)
    } catch (error) {
        res.status(400).json('Error while deleting car')
    }
})

export default carsRouter
