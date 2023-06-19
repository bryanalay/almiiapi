import express from "express";
import userController from "../controllers/userController.js";
import { authenticateJWT } from "../auth/index.js";

const { deleteUserById, getUserById, getUserByUsername, getUsers, insertUser } =
  userController;

const userRoutes = express.Router();
//------------/user/---------------//
userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById);
userRoutes.get("/:username", getUserByUsername)
userRoutes.post("/", insertUser);
userRoutes.delete("/:id", deleteUserById);

export { userRoutes };
