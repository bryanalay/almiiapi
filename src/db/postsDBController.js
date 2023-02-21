import { nanoid } from "nanoid";
import { pool } from "./pgdb.js";

async function getPosts(req, res) {
  await pool
    .query(
      `select almimaindb.postdb.id, almimaindb.userdb.id as user_id,
    almimaindb.postdb.body, almimaindb.postdb.fecha, 
    almimaindb.userDB.username from almimaindb.postdb 
    join almimaindb.userDB 
    on almimaindb.postDB.user_id = almimaindb.userDB.id;`
    )
    .then((result) => {
      res.status(200).send(result?.rows);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

async function insertPost(req, res) {
  const { userid, data } = req.body;
  const id = nanoid(6);
  const fecha = new Date().toLocaleString();
  await pool
    .query(
    //   `insert into almimaindb.postdb(id,user_id,body,fecha) 
    // values ('${id}','${userid}','${data}','${fecha}');`
    `INSERT INTO almimaindb.postdb (id,user_id, body,fecha)
    VALUES ('${id}','${userid}','${data}','${fecha}')
    RETURNING (SELECT username FROM almimaindb.userdb WHERE id = '${userid}');`
    )
    .then((result) => {
      res.status(201).send({
        message: "Posted successfully",
        postid: id,
        username: result.rows[0].username
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

async function deletePost(req, res) {
  const { id } = req.params;
  await pool
    .query(`delete from almimaindb.postdb where id = '${id}';`)
    .then((result) => {
      res.status(200).send({
        message: "Post deleted",
        postid: id,
      });
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

async function selectPostByid(req, res) {
  const { id } = req.params;
  await pool
    .query(`select * from almimaindb.postdb where id = '${id}'`)
    .then((result) => {
      res.status(200).send(result?.rows[0]);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });
}

async function selectPostByUserId(req, res) {
  const { id } = req.params;
  await pool
    .query(
      `select id, body, fecha from almimaindb.postdb where user_id = '${id}';`
    )
    .then((result) => {
      const posts = {
        user_id: id,
        posts: result.rows,
      };
      res.status(200).send(posts);
    });
}

export { getPosts, insertPost, deletePost, selectPostByid, selectPostByUserId };
