import Express from "express";
import likesController from "../controllers/likesController.js";

const { deleteLike, getLikes, getLikesByPostId, insertLikes } = likesController;

const likeRoutes = Express.Router();

likeRoutes.get("/", getLikes);
likeRoutes.get("/post/:id", getLikesByPostId);
likeRoutes.post("/", insertLikes);
likeRoutes.delete("/:id", deleteLike);

export { likeRoutes };
