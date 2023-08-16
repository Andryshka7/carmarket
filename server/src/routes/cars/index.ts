import { Router } from 'express'
import { authenticate } from 'middleware'
import upload from 'helpers/multer'
import { handleDeleteCar, handleCreateCar, handleFetchCars } from './handlers'

const carsRouter = Router()

carsRouter.get('/', handleFetchCars)

carsRouter.post('/', authenticate, upload.array('image'), handleCreateCar)

carsRouter.delete('/:id', handleDeleteCar)

export default carsRouter
