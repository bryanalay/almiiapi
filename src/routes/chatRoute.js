import Express from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const chatRoute = Express.Router()

chatRoute.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/chat.html'))
})

// chatRoute.get('/clientcode', (req, res) => {
//   res.sendFile(path.join(__dirname, '../utils/client.js'), true)
// })

export { chatRoute }
