import saltQuery from "../db/saltQuery.js";

const saltController = {
  postSalt: async (req, res) => {
    try {
      const salt = await saltQuery.insertSalt();
      res.status(200).json({ salt });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  getSalt: async (req, res) => {
    try {
      const salt = await saltQuery.getSaltDB();
      res.status(200).json({ salt });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
};

export default saltController;
