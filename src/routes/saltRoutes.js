import express from 'express'
import { getSalt, postSalt } from '../controllers/saltController.js'

const saltRoutes = express.Router()

saltRoutes.get('/', getSalt)
saltRoutes.post('/', postSalt)

export { saltRoutes }