import { Request, Response } from 'express'
import { fetchCars } from 'database/queries/cars'

const handleFetchCars = async (req: Request, res: Response) => {
    try {
        const carList = await fetchCars()
        res.status(200).json(carList)
    } catch (error) {
        res.status(400).json('Error while fetching cars')
        console.log(error)
    }
}

export default handleFetchCars
