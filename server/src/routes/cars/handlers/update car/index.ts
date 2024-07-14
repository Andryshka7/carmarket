import { SERVER_URL } from 'config'
import { updateCar } from 'database/queries/cars'
import { createImage, deleteImage } from 'database/queries/images'
import { Request, Response } from 'express'
import { deleteFiles } from 'helpers'
import { Car } from 'types'

const handleUpdateCar = async (req: Request, res: Response) => {
	try {
		const car = JSON.parse(req.body.car) as Car

		if (Array.isArray(req.files)) {
			await Promise.all(
				req.files.map(async (file) => {
					const fileName = file.filename
					const originalName = file.originalname

					const url = `${SERVER_URL}/images/${file.filename}`

					await createImage(fileName, originalName, url, car.id)
					car.images.push({ name: fileName, originalName, url })
				})
			)
		}

		const removedImages = JSON.parse(req.body.removedImages) as string[]

		car.images = car.images.filter(({ url }) => !removedImages.includes(url))

		await Promise.all([await deleteFiles(...removedImages), await updateCar(car)])

		res.status(200).json(car)
	} catch (error) {
		console.log('An error occured while updating car', error)
		res.status(500).json('An error occured while updating car')
	}
}

export default handleUpdateCar
