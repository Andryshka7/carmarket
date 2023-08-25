import { Request, Response } from 'express'
import { deleteCar } from 'database/queries/cars'
import { deleteRelatedImages, fetchRelatedImages } from 'database/queries/images'
import { deleteImages } from 'images/controller'

const handleDeleteCar = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const images = await fetchRelatedImages(id)
        await deleteRelatedImages(id)
        await deleteCar(id)

        if (images) deleteImages(...images)
        res.status(200).json('Car has been deleted')
    } catch (error) {
        res.status(400).json('Error while deleting car')
        console.log(error)
    }
}

export default handleDeleteCar
