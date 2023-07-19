import likesQuery from "../db/likesQuery.js";

const likesController = {
  getLikes: async (req, res) => {
    try {
      const result = await likesQuery.selectLikes();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  getLikesByPostId: async (req, res) => {
    try {
      const { postid, user_logged } = req.body;
      const like = {
        postid: postid,
        userlogged: user_logged,
      };
      const result = await likesQuery.selectLikesByPostId(like);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  insertLikes: async (req, res) => {
    try {
      const { postid, user_logged } = req.body;
      const like = {
        postid: postid,
        userlogged: user_logged,
      };
      const result = await likesQuery.insertLike(like);
      res.status(200).json({
        like,
        Message: "Post Likeado!!",
      });
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  deleteLike: async (req, res) => {
    try {
      const { postid, user_logged } = req.body;
      const like = {
        postid: postid,
        userlogged: user_logged,
      }
      const result = await likesQuery.selectLikesByPostId(like);
      if (result.length > 0) {
        const result = await likesQuery.deleteLike(like);
        res.status(200).json({
          Message: "Deleted succesfully",
        });
      } else {
        throw new Error("Like inexistente!!");
      }
    } catch (error) {
      res.status(200).json({
        Message: "Nada que borrar!!",
      });
    }
  },
};

export default likesController;
