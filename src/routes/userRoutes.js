import express from 'express'
import userController from '../controllers/userController.js'
import { authenticateJWT } from '../auth/index.js'

const {
  deleteUserById,
  getUserById,
  getUserByUsername,
  getUsers,
  insertUser,
  updateAvatarProfile,
  updateBannerProfile
} = userController

const userRoutes = express.Router()
//------------/user/---------------//
userRoutes.get('/', authenticateJWT, getUsers)
userRoutes.get('/:id', authenticateJWT, getUserById)
userRoutes.get('/u/:username', authenticateJWT, getUserByUsername)
userRoutes.post('/', insertUser)
userRoutes.delete('/:id', authenticateJWT, deleteUserById)
userRoutes.put('/update', authenticateJWT, updateAvatarProfile)
userRoutes.put('/update/banner', authenticateJWT, updateBannerProfile)

export { userRoutes }
