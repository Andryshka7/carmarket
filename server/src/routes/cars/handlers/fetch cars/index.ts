import { fetchCars } from 'database/queries/cars'
import { Request, Response } from 'express'

const handleFetchCars = async (req: Request, res: Response) => {
	try {
		const cars = await fetchCars()
		res.status(200).json(cars)
	} catch (error) {
		console.log('Error while fetching cars', error)
		res.status(500).json('Error while fetching cars')
	}
}

export default handleFetchCars
