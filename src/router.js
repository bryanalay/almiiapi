import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { saltRoutes } from "./routes/saltRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import { postsRoutes } from "./routes/postsRoutes.js";
import { likeRoutes } from "./routes/likeRoutes.js";
import { authenticateJWT } from "./auth/index.js";
const router = (app) => {
  const route = express.Router();
  app.use("/api/v1", route);
  route.use("/login", loginRoutes);
  route.use("/user", userRoutes);
  route.use("/salt", authenticateJWT, saltRoutes);
  route.use("/posts", authenticateJWT, postsRoutes);
  route.use("/like",authenticateJWT, likeRoutes);

};

export { router };
