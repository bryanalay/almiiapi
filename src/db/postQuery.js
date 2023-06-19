import { query } from "../config/db.js";

const postQuery = {
  getPosts: async () => {
    const qre = "select * FROM getPosts();";
    const result = await query(qre);
    return result[1].rows;
  },

  getPostById: async (id) => {
    const qre = `select * from almimaindb.postdb where id = '${id}'`;
    const result = await query(qre);
    return result[1].rows;
  },

  getPostByUserId: async (id) => {
    const qre = `select id, body, fecha from almimaindb.postdb where user_id = '${id}';`;
    const result = await query(qre);
    return result[1].rows;
  },

  getUsernamesByPosyId: async (id) => {
    const qre = `select * FROM getLikesByPostId('${id}');`;
    const result = await query(qre);
    return result[1].rows;
  },

  insertPost: async (post) => {
    const { id, userid, data, fecha } = post;
    const qre = `INSERT INTO almimaindb.postdb (id,user_id, body,fecha)
  VALUES ('${id}','${userid}','${data}','${fecha}')
  RETURNING (SELECT username FROM almimaindb.userdb WHERE id = '${userid}');`;
    const result = await query(qre);
    return result[1];
  },

  deletePost: async (id) => {
    const qre = `delete from almimaindb.postdb where id = '${id}';`;
    const result = await query(qre);
    return result[1];
  },
};

export default postQuery;
