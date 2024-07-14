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
            await Promise.all(
                req.files.map(async (file) => {
                    const fileName = file.filename
                    const originalName = file.originalname

                    const url = `${SERVER_URL}/images/${file.filename}`

                    await createImage(fileName, originalName, url, car_id)
                    uploaded.push({ name: fileName, originalName, url })
                })
            )
        }

        const createdCar = { ...car, id: car_id, user, images: uploaded }

        res.status(200).json(createdCar)
    } catch (error) {
        console.log('Error while creating car', error)
        res.status(50).json('Error while creating car')
    }
}

export default handleCreateCar
