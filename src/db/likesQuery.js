import { query } from "../config/db.js";

const likesQuery = {
  selectLikes: async () => {
    const qre = "";
    const result = await query(qre);
    return result[1].rows;
  },

  selectLikesByPostId: async () => {
    const qre = "";
    const result = await query(qre);
    return result[1].rows;
  },

  insertLike: async (like) => {
    const { id, postid, user_logged } = like;
    const qre = `insert into almimaindb.likesdb(id,post_id,user_id)
    values('${id}','${postid}','${user_logged}');`;
    const result = await query(qre);
    return result[1];
  },

  deleteLike: async (id) => {
    const qre = `delete from almimaindb.likesdb where id = '${id}';`;
    const result = await query(qre);
    return result[1];
  },
};

export default likesQuery;
