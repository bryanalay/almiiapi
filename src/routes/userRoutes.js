import express from 'express'
import userController from '../controllers/userController.js'
import { authenticateJWT } from '../auth/index.js'

const { deleteUserById, getUserById, getUserByUsername, getUsers, insertUser } =
  userController

const userRoutes = express.Router()
//------------/user/---------------//
userRoutes.get('/', authenticateJWT, getUsers)
userRoutes.get('/:id', authenticateJWT, getUserById)
userRoutes.get('/u/:username', authenticateJWT, getUserByUsername)
userRoutes.post('/', insertUser)
userRoutes.delete('/:id', authenticateJWT, deleteUserById)

export { userRoutes }
