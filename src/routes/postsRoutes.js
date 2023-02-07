import Express from 'express'
import { getAllPosts, savePost, eliminatePost, getPostById, getPostByUserId } from '../controllers/postsController.js'

const postsRoutes = Express.Router()

postsRoutes.get('/',getAllPosts)
postsRoutes.get('/:id',getPostByUserId)
postsRoutes.get('/search', getPostById)
postsRoutes.delete('/delete', eliminatePost)

postsRoutes.post('/', savePost)

export { postsRoutes }