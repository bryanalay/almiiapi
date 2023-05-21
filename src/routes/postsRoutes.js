import Express from 'express'
import { getAllPosts, savePost, eliminatePost, getPostById, getPostByUserId, getUsernamesLikesById } from '../controllers/postsController.js'

const postsRoutes = Express.Router()

postsRoutes.get('/',getAllPosts)
postsRoutes.get('/:id',getPostByUserId)
postsRoutes.get('/search/:id', getPostById)
postsRoutes.get('/likes/:id',getUsernamesLikesById)
postsRoutes.delete('/delete/:id', eliminatePost)

postsRoutes.post('/', savePost)

export { postsRoutes }