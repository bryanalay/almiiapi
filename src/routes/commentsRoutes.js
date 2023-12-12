import Express from 'express'
import commentsController from '../controllers/commentsController.js'

const { getComments, getComment, postComent, deleteComment } =
  commentsController
const commentsRouter = Express.Router()

commentsRouter.get('/', getComments)
commentsRouter.get('/:id', getComment)
commentsRouter.post('/', postComent)
commentsRouter.delete('/', deleteComment)

export { commentsRouter }
