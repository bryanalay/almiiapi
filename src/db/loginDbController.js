import { pool } from "./pgdb.js";

async function login(req, res) {
  const { username, password } = req.body;  
  try {
    const pass = await findUserAndPassword(username)
    if(password == pass){
        res.status(200).send({
            message : "Logged pa"
        })
    }
  } catch (error) {
    res.status(404).send({
        message : error.message
    })
  }
}

async function findUserAndPassword(username) {
  let {rows} = await pool(
    `select password from almimaindb.userdb where username='${username}'`
  ) 

  switch (rows.length) {
    case 1:
        return {
            password: rows[0].password,
          };
    case 0:
        throw new Error('User not found')
    default:
        break;
  }
}

export { findUserAndPassword };
