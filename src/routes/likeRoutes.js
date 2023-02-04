import Express from 'express'
import { getLikes, postLike, dropLike, getLikedBy } from '../controllers/likesController.js'

const likeRoutes = Express.Router()

likeRoutes.get('/',getLikes)
likeRoutes.get('/post', getLikedBy)
likeRoutes.post('/post',postLike)
likeRoutes.delete('/',dropLike)

export { likeRoutes }