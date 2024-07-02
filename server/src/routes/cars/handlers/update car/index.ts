import { Request, Response } from 'express'
import { updateCar } from 'database/queries/cars'
import { createImage, deleteImage } from 'database/queries/images'
import { Car } from 'types'
import { uuid } from 'uuidv4'
import { deleteFile, uploadFile } from 'helpers'

const handleUpdateCar = async (req: Request, res: Response) => {
    try {
        const car = JSON.parse(req.body.car) as Car

        if (Array.isArray(req.files)) {
            await Promise.all(
                req.files.map(async (file) => {
                    const name = uuid()
                    const extension = file.originalname.split('.')[1]

                    const fileName = `${name}.${extension}`
                    const originalName = file.originalname

                    const url = await uploadFile(file, fileName)

                    await createImage(fileName, originalName, url, car.id)
                    car.images.push({ name: fileName, originalName, url })
                })
            )
        }

        const removedImages = JSON.parse(req.body.removedImages) as string[]

        car.images = car.images.filter(({ url }) => !removedImages.includes(url))

        await Promise.all([
            removedImages.map(async (url) => {
                await deleteFile(url)
                await deleteImage(url)
            }),
            await updateCar(car)
        ])

        res.status(200).json(car)
    } catch (error) {
        console.log('An error occured while updating car', error)
        res.status(500).json('An error occured while updating car')
    }
}

export default handleUpdateCar
