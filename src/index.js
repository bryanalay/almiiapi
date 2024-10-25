import express from 'express'
import cors from 'cors'
import { router } from './router.js'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = process.env.PORT || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'utils')))
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  io.emit('message', `user ${socket.id} connected`)
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
    io.emit('message', `user ${socket.id} disconnected`)
  })

  socket.on('message', (data) => {
    console.log({ data: data, id: socket.id })
    io.sockets.emit('message', { data: data, id: socket.id })
  })
})

router(app)

server.listen(port, () => {
  console.log('Running at port ', `${port}`)
})
