import Express from 'express'
import { getAllPosts, savePost, eliminatePost, getPostById, getPostByUserId } from '../controllers/postsController.js'

const postsRoutes = Express.Router()

postsRoutes.get('/',getAllPosts)
postsRoutes.get('/:id',getPostByUserId)
postsRoutes.get('/search/:id', getPostById)
postsRoutes.delete('/delete/:id', eliminatePost)

postsRoutes.post('/', savePost)

export { postsRoutes }