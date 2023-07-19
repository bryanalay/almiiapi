import { query } from "../config/db.js";

const postQuery = {
  getPosts: async () => {
    const qre = "select * FROM getPosts();";
    const result = await query(qre);
    return result[1].rows;
  },

  getPostById: async (id) => {
    const qre = `select * from postdb where id = '${id}'`;
    const result = await query(qre);
    return result[1].rows;
  },

  getPostByUserId: async (id) => {
    const qre = `select id, body, fecha from postdb where user_id = '${id}';`;
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
    const qre = `INSERT INTO postdb (id,user_id, body,fecha)
  VALUES ('${id}','${userid}','${data}','${fecha}')
  RETURNING (SELECT username FROM userdb WHERE id = '${userid}');`;
    const result = await query(qre);
    return result[1];
  },

  deletePost: async (id) => {
    const qre = `delete from postdb where id = '${id}';`;
    const result = await query(qre);
    return result[1];
  },
};

export default postQuery;
