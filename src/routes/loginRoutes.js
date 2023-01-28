import express from 'express'
import { getPassLoggin } from '../controllers/loginController'
import bc from 'bcrypt'

const loginRoutes = express.Router()

loginRoutes.post('/',getPassLoggin)

export { loginRoutes }