import { Request, Response } from 'express'
import { createCar } from 'database/queries/cars'
import { createImage } from 'database/queries/images'
import { Car, Image, User } from 'types'
import { SERVER_URL } from 'config'

const handleCreateCar = async (req: Request, res: Response) => {
    try {
        const user = req.user as User
        const car = JSON.parse(req.body.car) as Car

        const car_id = await createCar(car, user.id)

        const uploaded: Omit<Image, 'id'>[] = []

        if (Array.isArray(req.files)) {
            req.files.forEach((image) => {
                const name = image.originalname
                const originalName = image.filename
                const url = `${SERVER_URL}/images/${image.filename}`
                uploaded.push({ name, originalName, url })
            })
        }

        const promises: Promise<void>[] = []

        uploaded.forEach(({ name, originalName, url }) => {
            promises.push(createImage(name, originalName, url, car_id))
        })

        await Promise.all(promises)

        const created = { ...car, id: car_id, user, images: uploaded }

        res.status(200).json(created)
    } catch (error) {
        res.status(400).json('Error while creating car')
        console.log(error)
    }
}

export default handleCreateCar
