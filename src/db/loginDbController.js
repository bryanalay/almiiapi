import { pool } from "./pgdb.js";
import bc from 'bcrypt'
import { saltDB } from "./saltBcrypt.js";
import { authSign } from "../auth/index.js";

async function login(req, res) {
  const { username, password } = req.body;
  let hashedPass = await bc.hash(password,(await saltDB()).rows[0].salto)
  try {
    const pass = await findUserAndPassword(username)
    const pa = pass[1]
    const token = authSign({
      userid: pa.rows[0].id, 
      username : username,
      password: hashedPass,
    })
    if (hashedPass == pa.rows[0].password) {
      res.status(200).send({
        message: "Logged pa",
        userid: pa.rows[0].id,
        username:pa.rows[0].username,
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
  const query = `
  set search_path to almimaindb;  
  select * from login('${username}');
  `
  return pool.query(query)
}

export { login };
