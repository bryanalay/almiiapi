import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { saltRoutes } from "./routes/saltRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import { postsRoutes } from "./routes/postsRoutes.js";
import { likeRoutes } from "./routes/likeRoutes.js";
import { authenticateJWT } from "./auth/index.js";
import { sensorRoutes } from "./routes/sensorRoutes.js";

const router = (app) => {
  const route = express.Router();
  const routev2 = express.Router();
  app.use("/api/v1", route);
  route.use("/login", loginRoutes);
  route.use("/user", userRoutes);
  route.use('/posts',postsRoutes)
  route.use("/like", authenticateJWT, likeRoutes);
  route.use("/sensor", sensorRoutes)
  //route.use("/salt", authenticateJWT, saltRoutes);
};

export { router };
