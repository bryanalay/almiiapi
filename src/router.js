import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { saltRoutes } from "./routes/saltRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import { postsRoutes } from "./routes/postsRoutes.js";
import { likeRoutes } from "./routes/likeRoutes.js";

const router = (app) => {
  const route = express.Router();
  app.use("/api/v1", route);

  route.use("/user", userRoutes);
  route.use("/salt", saltRoutes);
  route.use("/login", loginRoutes);
  route.use("/posts", postsRoutes);
  route.use("/like",likeRoutes);
};

export { router };
