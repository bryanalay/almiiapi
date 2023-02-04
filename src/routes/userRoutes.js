import express from 'express'
import { getAllUsers, getUserById, getUserByUser, postUser } from '../controllers/userController.js'
import { authenticateJWT, authTest } from '../auth/index.js'

const userRoutes = express.Router()
//------------/user/---------------//
userRoutes.get('/', getAllUsers)

userRoutes.get('/id/:id', getUserById)
//userRoutes.get('/:username', getUserByUser)
userRoutes.get('/test',authTest,(req,res)=>{
    console.log('after next');
    res.status(200).send({
        message: 'Si estas autorizado pa'
    })
})


userRoutes.post('/', postUser)

export { userRoutes }