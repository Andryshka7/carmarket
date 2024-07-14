import { Request, Response } from 'express'
import { deleteCar } from 'database/queries/cars'
import { deleteRelatedImages, fetchRelatedImages } from 'database/queries/images'
import { deleteFiles } from 'helpers'

const handleDeleteCar = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const images = await fetchRelatedImages(id)
        await deleteRelatedImages(id)
        await deleteCar(id)

        if (images) {
            await deleteFiles(...images)
        }
        res.status(200).json('Car has been deleted')
    } catch (error) {
        console.log('Error while deleting car', error)
        res.status(500).json('Error while deleting car')
    }
}

export default handleDeleteCar
