import { Request, Response } from 'express'
import { deleteCar } from 'database/queries/cars'

const handleDeleteCar = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        await deleteCar(id)
        res.status(200).json('Car has been deleted')
    } catch (error) {
        res.status(400).json('Error while deleting car')
        console.log(error)
    }
}

export default handleDeleteCar
