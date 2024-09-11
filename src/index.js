import express from 'express'
import cors from 'cors'
import { router } from './router.js'
import { Server } from 'socket.io'
import { createServer } from 'node:http'

const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
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
