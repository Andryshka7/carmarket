import { Request, Response } from 'express'
import { updateCar } from 'database/queries/cars'
import { createImage, deleteImage } from 'database/queries/images'
import { Car, Image } from 'types'
import { deleteImages } from 'images/controller'
import { SERVER_URL } from 'config'

const handleUpdateCar = async (req: Request, res: Response) => {
    try {
        const car = JSON.parse(req.body.car) as Car

        const uploaded: Image[] = []

        if (Array.isArray(req.files)) {
            req.files.forEach((image) => {
                const name = image.originalname
                const originalName = image.filename
                const url = `${SERVER_URL}/images/${image.filename}`
                uploaded.push({ url, name, originalName })
            })
        }

        const promises: Promise<void>[] = []

        uploaded.forEach(({ name, originalName, url }) => {
            car.images.push({ name, originalName, url })
            promises.push(createImage(name, originalName, url, car.id))
        })

        const removedImages = JSON.parse(req.body.removedImages) as string[]

        removedImages.forEach((originalName) => {
            promises.push(deleteImage(originalName))
        })

        deleteImages(...removedImages)

        await Promise.all(promises)
        await updateCar(car)

        car.images = car.images.filter(({ originalName }) => !removedImages.includes(originalName))

        res.status(200).json(car)
    } catch (error) {
        console.log(error)
        res.status(500).json('An error occured while updating car')
    }
}

export default handleUpdateCar
