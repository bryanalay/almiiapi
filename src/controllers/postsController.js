import { nanoid } from "nanoid";
import postQuery from "../db/postQuery.js";

const postController = {
  getPosts: async (req, res) => {
    try {
      const result = await postQuery.getPosts();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await postQuery.getPostById(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  getPostsByUserId: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await postQuery.getPostByUserId(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  getUsernamesByPostId: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await postQuery.getUsernamesByPosyId(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  insertPost: async (req, res) => {
    try {
      const { userid, data } = req.body;
      const id = nanoid(6);
      const fecha = new Date().toLocaleString();
      const post = { id: id, userid: userid, data: data, fecha: fecha };
      const result = await postQuery.insertPost(post);
      res.status(201).json({ message: "Posted successfully", postid: id });
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postQuery.getPostById(id);
      if (post.length > 0) {
        const result = await postQuery.deletePost(id);
        res.status(200).json({
          Message: "Deleted succesfully",
        });
      } else {
        throw new Error("No hay post para borrar");
      }
    } catch (error) {
      res.status(404).json({
        message: error.message,
      });
    }
  },
};

export default postController;
