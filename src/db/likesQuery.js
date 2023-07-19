import { query } from "../config/db.js";

const likesQuery = {
  selectLikes: async () => {
    const qre = "select * from likesdb";
    const result = await query(qre);
    return result[1].rows;
  },

  selectLikesByPostId: async (like) => {
    const { postid, userlogged } = like;
    const qre = `select * from likesdb where user_id = '${userlogged}' and post_id ='${postid}';`;
    const result = await query(qre);
    return result[1].rows;
  },

  insertLike: async (like) => {
    const { postid, userlogged } = like;
    const qre = `insert into likesdb(user_id,post_id)
    values('${userlogged}','${postid}');`;
    const result = await query(qre);
    return result[1];
  },

  deleteLike: async (like) => {
    const { postid, userlogged } = like;
    const qre = `delete from likesdb where user_id = '${userlogged}' and post_id ='${postid}';`;
    const result = await query(qre);
    return result[1];
  },
};

export default likesQuery;
