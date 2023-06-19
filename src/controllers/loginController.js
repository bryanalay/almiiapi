//import { pool } from "./pgdb.js";
import bc from "bcrypt";
import saltQuery from "../db/saltQuery.js";
import { authSign } from "../auth/index.js";
import { loginQuery } from "../db/loginQuery.js";

const loginController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    let hashedPass = await bc.hash(password, await saltQuery.getSaltDB());
    try {
      const pass = await loginQuery.login(username);
      const pa = pass[0];
      const token = authSign({
        userid: pa.id,
        username: username,
        password: hashedPass,
      });
      if (hashedPass == pa.password) {
        res.status(200).send({
          message: "Logged pa",
          userid: pa.id,
          username: pa.username,
          token: token,
        });
      } else {
        throw new Error("User or Password error");
      }
    } catch (error) {
      res.status(404).send({
        message: error.message,
      });
    }
  },
};

export default loginController