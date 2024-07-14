import { Router } from 'express'
import { upload } from 'helpers'
import { authenticate } from 'middleware'

import { handleCreateCar, handleDeleteCar, handleFetchCars, handleUpdateCar } from './handlers'

const carsRouter = Router()

carsRouter.get('/', handleFetchCars)

carsRouter.post('/', authenticate, upload.array('image'), handleCreateCar)
carsRouter.patch('/', authenticate, upload.array('image'), handleUpdateCar)

carsRouter.delete('/:id', authenticate, handleDeleteCar)

export default carsRouter
