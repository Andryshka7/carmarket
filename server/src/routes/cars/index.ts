import { Router } from 'express'
import { authenticate } from 'middleware'
import { handleDeleteCar, handleCreateCar, handleUpdateCar, handleFetchCars } from './handlers'
import { upload } from 'helpers'

const carsRouter = Router()

carsRouter.get('/', handleFetchCars)

carsRouter.post('/', authenticate, upload.array('image'), handleCreateCar)
carsRouter.patch('/', authenticate, upload.array('image'), handleUpdateCar)

carsRouter.delete('/:id', authenticate, handleDeleteCar)

export default carsRouter
