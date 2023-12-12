import express from 'express'
import { userRoutes } from './routes/userRoutes.js'
import { saltRoutes } from './routes/saltRoutes.js'
import { loginRoutes } from './routes/loginRoutes.js'
import { postsRoutes } from './routes/postsRoutes.js'
import { likeRoutes } from './routes/likeRoutes.js'
import { authenticateJWT } from './auth/index.js'
import { sensorRoutes } from './routes/sensorRoutes.js'
import { homeRoutes } from './routes/homeRoutes.js'
import { commentsRouter } from './routes/commentsRoutes.js'

const router = (app) => {
  const route = express.Router()
  const routev2 = express.Router()
  app.use('/api/v1', route)
  route.use('/', homeRoutes)
  route.use('/login', loginRoutes)
  route.use('/user', userRoutes)
  route.use('/posts', authenticateJWT, postsRoutes)
  route.use('/like', authenticateJWT, likeRoutes)
  route.use('/sensor', sensorRoutes)
  route.use('/comment', commentsRouter)
  //route.use("/salt", authenticateJWT, saltRoutes);
}

export { router }
