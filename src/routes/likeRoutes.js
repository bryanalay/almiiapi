import Express from 'express'
import { getLikes, postLike, dropLike, getLikedBy } from '../controllers/likesController.js'

const likeRoutes = Express.Router()

likeRoutes.get('/',getLikes)
likeRoutes.get('/post/:id', getLikedBy)
likeRoutes.post('/post',postLike)
likeRoutes.delete('/:id',dropLike)

export { likeRoutes }