import express from 'express'
import { getAllUsers, getUserById, getUserByUser, postUser } from '../controllers/userController.js'

const userRoutes = express.Router()
//------------/user/---------------//
userRoutes.get('/', getAllUsers)
userRoutes.get('/id/:id', getUserById)
userRoutes.get('/:username', getUserByUser)


userRoutes.post('/', postUser)

export { userRoutes }