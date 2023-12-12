import { query } from '../config/db.js'

const commentsQuery = {
  selectComments: async () => {
    const qre = 'select * from comentario'
    const result = await query(qre)
    return result[1].rows
  },
  getComment: async (id) => {
    const qre = `select * from comentario where id = '${id}';`
    const result = await query(qre)
    if (result[1].rows.length == 0) {
      throw new Error('Comment not found')
    }
    return result[1].rows
  },
  insertComment: async (id, postid, userid, comentario) => {
    const qre = `insert into comentario(id,post_id,user_id,comentario) values ('${id}','${postid}','${userid}','${comentario}');`
    const result = await query(qre)
    return result[1].rows
  },
  deleteComment: async (id, userid, postid) => {
    const qre = `delete from comentario where id = '${id}' and user_id = '${userid}' and post_id = '${postid}';`
    const result = await query(qre)
    return result[1]
  }
}

export default commentsQuery
