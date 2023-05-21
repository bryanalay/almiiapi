import Express from 'express'
import { getCustomerId } from '../controllers/customersController.js'


const customersRoutes = Express.Router()

customersRoutes.get('/search/:id',getCustomerId)

export { customersRoutes }