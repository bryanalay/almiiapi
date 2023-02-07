import { pool } from "./pgdb.js";
import bc from 'bcrypt'
import { saltDB } from "./saltBcrypt.js";
import { authSign } from "../auth/index.js";

async function login(req, res) {
  const { username, password } = req.body;
  let hashedPass = await bc.hash(password,(await saltDB()).rows[0].salto)
  try {
    const pass = await findUserAndPassword(username)
    const token = authSign({
      userid: pass.rows[0].id, 
      username : username,
      password: hashedPass,
    })
    if (hashedPass == pass.rows[0].password) {
      res.status(200).send({
        message: "Logged pa",
        userid: pass.rows[0].id,
        token: token
      });
    }else{
      throw new Error('User or Password error')
    }
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
}

async function findUserAndPassword(username) {
  return pool.query(
    `select password, id from almimaindb.userdb where username='${username}'`
  )
}

export { login };
