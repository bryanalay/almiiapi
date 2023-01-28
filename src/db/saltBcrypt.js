import { pool } from "./pgdb.js";
import bc from "bcrypt";

async function insertSalt(req, res) {
  const salt = await bc.genSalt(5);
  await pool
    .query(`INSERT INTO almimaindb.salt(salto) values('${salt}');`)
    .then((result) => {
      res.status(200).send({
        message: "Salt inserted",
      });
    })
    .catch((err) => {
      res.status(404).send({
        error: {
          message: err.message,
        },
      });
    });
}

function saltDB() {
  return pool.query(`SELECT * FROM almimaindb.salt;`)
}

async function findSalt(req, res) {
  console.log("enviando salto");
  await pool
    .query(`SELECT * FROM almimaindb.salt;`)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      res.status(404).send({
        error: {
          message: err.message,
        },
      });
    });
}

//pool.query(`INSERT INTO salt(salt) values ()`,(req,res)=>{})

export { insertSalt, findSalt, saltDB };
