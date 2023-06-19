import express from "express";
import saltController from "../controllers/saltController.js";

const { getSalt, postSalt } = saltController;

const saltRoutes = express.Router();

saltRoutes.get("/", getSalt);
saltRoutes.post("/", postSalt);

export { saltRoutes };
