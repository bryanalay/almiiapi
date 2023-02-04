import Express from 'express'
import { getAllPosts, savePost, eliminatePost, getPostById } from '../controllers/postsController.js'

const postsRoutes = Express.Router()

postsRoutes.get('/',getAllPosts)
postsRoutes.get('/search', getPostById)
postsRoutes.delete('/delete', eliminatePost)

postsRoutes.post('/', savePost)

export { postsRoutes }