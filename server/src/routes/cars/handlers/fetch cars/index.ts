import { Request, Response } from 'express'
import { fetchCars } from 'database/queries/cars'

const handleFetchCars = async (req: Request, res: Response) => {
    try {
        const cars = await fetchCars()
        res.status(200).json(cars)
    } catch (error) {
        res.status(400).json('Error while fetching cars')
        console.log(error)
    }
}

export default handleFetchCars
