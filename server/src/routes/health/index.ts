import { Router } from 'express'

const healthRouter = Router()

healthRouter.get('/', (req, res) => {
	res.status(201).json('Server is working')
})

export default healthRouter
