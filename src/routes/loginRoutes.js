import express from 'express'
import loginController from '../controllers/loginController.js'

const loginRoutes = express.Router()

loginRoutes.post('/', loginController.login)
loginRoutes.post('/logout', loginController.logOut)

export { loginRoutes }
