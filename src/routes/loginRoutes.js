import express from 'express'
import { getPassLoggin } from '../controllers/loginController.js'

const loginRoutes = express.Router()

loginRoutes.post('/',getPassLoggin)

export { loginRoutes }