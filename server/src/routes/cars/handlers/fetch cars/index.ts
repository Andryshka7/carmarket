import { Request, Response } from 'express'
import { fetchCars } from 'database/queries/cars'

const handleFetchCars = async (req: Request, res: Response) => {
    try {
        const cars = await fetchCars()
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json('Error while fetching cars')
        console.log('Error while fetching cars')
    }
}

export default handleFetchCars
