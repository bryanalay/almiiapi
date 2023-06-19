import Express from "express";
import postController from "../controllers/postsController.js";

const {
  getPosts,
  getPostById,
  getPostsByUserId,
  getUsernamesByPostId,
  insertPost,
  deletePost,
} = postController;

const postsRoutes = Express.Router();

postsRoutes.get("/", getPosts);
postsRoutes.get("/:id", getPostsByUserId);
postsRoutes.get("/search/:id", getPostById);
postsRoutes.get("/likes/:id", getUsernamesByPostId);
postsRoutes.post("/", insertPost);
postsRoutes.delete("/delete/:id", deletePost);

export { postsRoutes };
