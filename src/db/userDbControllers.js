import { saltDB } from "./saltBcrypt.js";
import { pool } from "./pgdb.js";
import {nanoid} from 'nanoid'
import {hash} from "bcrypt";

async function getUsers(req, res) {
  await pool
    .query(`SELECT * FROM almimaindb.userDB`)
    .then((result) => {
      res.status(200).send(result?.rows);
    })
    .catch((err) => {
      res.status(404).send({
        error: {
          message: err.message,
        },
      });
    });
}

async function findById(req,res){
  const{id} = req.params;
  await pool
    .query(`SELECT * FROM almimaindb.userDB where id = ${id}`)
    .then((result) => {
      res.status(200).send(result?.rows);
    })
    .catch((err) => {
      res.status(404).send({
        error: {
          message: err.message,
        },
      });
    });
}

async function findByUsername(req,res){
  const{username} = req.params;
  await pool
    .query(`SELECT * FROM almimaindb.userDB where username = '${username}';`)
    .then((result) => {
      res.status(200).send(result?.rows);
    })
    .catch((err) => {
      res.status(404).send({
        error: {
          message: err.message,
        },
      });
    });
}

async function insertUser(req, res) {
  const {username, password } = req.body;
  const id = nanoid(4);
  const salto = await saltDB()
  const passwordHashed = await hash(password,salto.rows[0].salto)
  await pool
    .query(`insert into almimaindb.userdb (id, username, password) values ('${id}','${username}', '${passwordHashed}');`)
    .then((result) => {
      res.status(200).send({
        message : "User created"
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

//insert into almimaindb.prueba (id, nombre) values (1,'Bryan');

export { getUsers, insertUser, findByUsername, findById };
