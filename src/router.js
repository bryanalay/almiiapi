import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { saltRoutes } from "./routes/saltRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";

const router = (app) => {
  const route = express.Router();
  app.use("/api/v1", route);

  route.use("/user", userRoutes);
  route.use("/salt", saltRoutes);
  route.use("/login", loginRoutes);
};

export { router };
