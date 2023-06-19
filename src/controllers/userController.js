import userQuery from "../db/userQuery.js";
import { nanoid } from "nanoid";
import { hash } from "bcrypt";
import saltQuery from "../db/saltQuery.js";

const userController = {
  getUsers: async (req, res) => {
    try {
      const result = await userQuery.getUsers();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userQuery.getUserById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        throw new Error("Usuario inexistente");
      }
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  getUserByUsername: async (req, res) => {
    try {
      const { username } = req.params;
      const result = await userQuery.getUserByUsername(username);
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  insertUser: async (req, res) => {
    const { username, password } = req.body;
    const id = nanoid(4);
    const salto = await saltQuery.getSaltDB();
    const passwordHashed = await hash(password, salto);
    try {
      const user = {
        id: id,
        username: username,
        passwordHashed: passwordHashed,
      };
      const result = await userQuery.insertUser(user);
      res.status(200).json({
        Message: "Usuario creado!!",
      });
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },

  deleteUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await userQuery.getUserById(id);
      if (result.length > 0) {
        const result = await userQuery.deleteUser(id);
        res.status(200).json({
          Message: "Deleted succesfully",
        });
      } else {
        throw new Error("Usuario inexcistente!!");
      }
    } catch (error) {
      res.status(404).json({
        status: "404",
        message: error.message,
      });
    }
  },
};

export default userController;
