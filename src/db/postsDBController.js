import { nanoid } from "nanoid";
import { pool,query } from "./pgdb.js";

async function getPosts(req, res) {
  /*const query = `
  SET search_path to almimaindb;
  select * FROM getPosts();
  `;*/
  const qre = 'select * FROM getPosts();'
  await query(qre)
  .then((result) => {
    res.status(200).send(result[1]?.rows);
  })
  .catch((err) => {
    res.status(404).send({
      message: err.message,
    });
  });

  /*await pool
    .query(query)
    .then((result) => {
      res.status(200).send(result[1]?.rows);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message,
      });
    });*/
}

async function insertPost(req, res) {
  const { userid, data } = req.body;
  const id = nanoid(6);
  const fecha = new Date().toLocaleString();
  await pool
    .query(
      `INSERT INTO almimaindb.postdb (id,user_id, body,fecha)
    VALUES ('${id}','${userid}','${data}','${fecha}')
    RETURNING (SELECT username FROM almimaindb.userdb WHERE id = '${userid}');`
    )
    .then((result) => {
      res.status(201).send({
        message: "Posted successfully",
        postid: id,
        username: result.rows[0].username,
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

//usando sp
async function getUsernamesByPostId(req, res) {
  //const id = req.params.id
  const id = "39y1oM";
  const query = `
  SET search_path to almimaindb;
  select * FROM getLikesByPostId('${id}');`;
  await pool
    .query(query)
    .then((result) => {
      res.status(200).send(result[1].rows);
    })
    .catch((err) => {
      res.status(404).send({
        Message: err.Message,
      });
    });
}

export {
  getPosts,
  insertPost,
  deletePost,
  selectPostByid,
  selectPostByUserId,
  getUsernamesByPostId,
};
/*
[
  {
    id: "GZFGqC",
    user_id: "gpTg",
    body: "post f",
    fecha: "3/31/2023, 10:13:23 PM",
    username: "user",
    likes: ["username1", "username2", "username3"],
  },
  {
    id: "zbxvis",
    user_id: "gpTg",
    body: "hola",
    fecha: "4/26/2023, 9:38:20 PM",
    username: "user",
    likes: ["username2", "username4", "username6"],
  },
];
*/
