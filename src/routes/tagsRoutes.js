import Express from 'express'
import tagsController from '../controllers/tagsController.js'

const { getTags, updateTagCounter } = tagsController

const tagsRoutes = Express.Router()

tagsRoutes.get('/', getTags)
tagsRoutes.put('/update/:id', updateTagCounter)

export { tagsRoutes }
